const wrapPromise = (promise: Promise<any>) => {
  let status = 'pending'
  let response: Response;

  const suspender = promise.then(
    (res: any) => {
      status = 'success'
      response = res
    },
    (err: any) => {
      status = 'error'
      response = err
    }
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

export default wrapPromise