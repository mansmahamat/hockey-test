import axios from "axios"
import { useQuery, useMutation } from "react-query"

const getLeagues = async () => {
  const { data } = await axios.get(
    "https://api.eliteprospects.com/v1/leagues/nhl/standings?offset=0&limit=100&sort=group&apiKey=qPbskB0iDFOAIXIE1ivC0OV3M8RVI4yj"
  )

  return data.data
}

export function useGetLeagues() {
  return useQuery(["getLeagues"], () => getLeagues())
}

const sortW = async (statsW) => {
  const { data } = await axios.get(
    `https://api.eliteprospects.com/v1/leagues/nhl/standings?offset=0&limit=100&sort=group,${statsW}&apiKey=qPbskB0iDFOAIXIE1ivC0OV3M8RVI4yj`
  )

  return data.data
}

export function useSortW(statsW) {
  return useQuery(["sortW"], () => sortW(statsW))
}

const sortL = async (statsL) => {
  const { data } = await axios.get(
    `https://api.eliteprospects.com/v1/leagues/nhl/standings?offset=0&limit=100&sort=group,${statsL}&apiKey=qPbskB0iDFOAIXIE1ivC0OV3M8RVI4yj`
  )

  return data.data
}

export function useSortL(statsL) {
  return useQuery(["sortL"], () => sortL(statsL))
}

const sortOTW = async (statsOTW) => {
  const { data } = await axios.get(
    `https://api.eliteprospects.com/v1/leagues/nhl/standings?offset=0&limit=100&sort=group,${statsOTW}&apiKey=qPbskB0iDFOAIXIE1ivC0OV3M8RVI4yj`
  )

  return data.data
}

export function useSortOTW(statsOTW) {
  return useQuery(["sortOTW"], () => sortOTW(statsOTW))
}
