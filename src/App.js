import {
  useGetLeagues,
  useSortL,
  useSortOTW,
  useSortW,
} from "./hooks/useGetLeagues"
import { HiChevronUp, HiChevronDown } from "react-icons/hi"
import { useEffect, useState } from "react"
import BodyTable from "./components/BodyTable"

function App() {
  const [active, setActive] = useState()
  const [W, setW] = useState(false)
  const [Wfilter, setWfilter] = useState("-stats.W")
  const [Lfilter, setLfilter] = useState("-stats.L")
  const [OTWfilter, setOTWfilter] = useState("-stats.OTW")
  const [L, setL] = useState(false)
  const [OTW, setOTW] = useState(false)

  const { data: getW, refetch: refetchW } = useSortW(Wfilter)
  const { data: getL, refetch: refetchL } = useSortL(Lfilter)
  const { data: getOTW, refetch: refetchOTW } = useSortOTW(OTWfilter)

  const { data, isLoading, isError } = useGetLeagues()

  const handleClickW = () => {
    refetchW()
    setActive(getW)
  }

  const handleClickL = () => {
    refetchL()
    setActive(getL)
  }

  const handleClickTW = () => {
    refetchOTW()
    setActive(getOTW)
  }

  useEffect(() => {
    setActive(data)
  }, [data])

  return (
    <div className=" flex justify-center overflow-x-auto">
      {isLoading && <div>Loading...</div>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            {active && (
              <table className="min-w-max w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      GP
                    </th>
                    <th
                      onClick={() => setW(!W)}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      W
                      {W ? (
                        <HiChevronUp
                          className="cursor-pointer"
                          onClick={() => {
                            setWfilter("stats.W")
                            handleClickW()
                          }}
                        />
                      ) : (
                        <HiChevronDown
                          className="cursor-pointer"
                          onClick={() => {
                            setWfilter("-stats.W")
                            handleClickW()
                          }}
                        />
                      )}
                    </th>

                    <th
                      onClick={() => setL(!L)}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      L
                      {L ? (
                        <HiChevronUp
                          className="cursor-pointer"
                          onClick={() => {
                            setLfilter("stats.L")
                            handleClickL()
                          }}
                        />
                      ) : (
                        <HiChevronDown
                          className="cursor-pointer"
                          onClick={() => {
                            setLfilter("-stats.L")
                            handleClickL()
                          }}
                        />
                      )}
                    </th>
                    <th
                      onClick={() => setOTW(!OTW)}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      OTW
                      {OTW ? (
                        <HiChevronUp
                          className="cursor-pointer"
                          onClick={() => {
                            setOTWfilter("stats.OTW")
                            handleClickTW()
                          }}
                        />
                      ) : (
                        <HiChevronDown
                          className="cursor-pointer"
                          onClick={() => {
                            setOTWfilter("-stats.OTW")
                            handleClickTW()
                          }}
                        />
                      )}
                    </th>
                    <th
                      onClick={() => {
                        setActive(data)
                      }}
                      scope="col"
                      className="px-6 cursor-pointer py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Clear
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {active?.map((person) => (
                    <BodyTable
                      id={person.id}
                      teamName={person.team.name}
                      statsGP={person.stats.GP}
                      statsW={person.stats.W}
                      statsL={person.stats.L}
                      statsOTW={person.stats.OTW}
                      group={person.group}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
