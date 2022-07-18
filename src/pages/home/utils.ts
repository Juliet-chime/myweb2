export const startDate = () => {
  const newDate = new Date()
  const minDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate()
  return minDate
}

export const endDate = (no: number) => {
  const myCurrentDate = new Date()
  const futureDateInSeconds = myCurrentDate.setDate(myCurrentDate.getDate() + no)
  const futureDtae = new Date(futureDateInSeconds)
  const date =
    futureDtae.getFullYear() + '-' + (futureDtae.getMonth() + 1) + '-' + futureDtae.getDate()
  return date
}
