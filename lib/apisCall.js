import useSWR from 'swr'

export function apisCall (){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
  const { data, error } =  useSWR('https://jsonplaceholder.typicode.com/todos/1', fetch)
  return data
}