
const STORAGE = window.localStorage
const STORAGE_KEY = 'nova'

export function getAll () {
  return new Promise((resolve) => {
    const results = STORAGE.getItem(STORAGE_KEY)

    try {
      resolve(
        results
        ? JSON.parse(results)
        : []
      )
    } catch (e) {
      resolve([])
    }
  })
}
