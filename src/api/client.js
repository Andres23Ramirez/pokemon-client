import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import get from 'lodash/fp/get'

// This is where we would configure the global things all API calls need; The general cases.
// Base url, headers, timeout, etc.
// https://github.com/axios/axios#request-config
// Other needs can be handled case by case using axios directly instead of this
// client instance.
const URL = 'http://localhost:3000'
const instance = axios.create({
  baseURL: URL,
  transformResponse: axios.defaults.transformResponse.concat(
    response => response
  ),
  transformRequest: [
    // headers is available as a second arg here if needed
    // See transformRequest section here: https://github.com/axios/axios
    data => decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
})

instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config
  },
  error => Promise.reject(error)
)

export const getData = async ({
  url,
  params,
  transform,
  digResponseData,
  clientApiAdapter,
  stubs = false,
  camelize = true,
  ...restConfig
}) => {
  const clientApi = (await clientApiAdapter) || instance
  const getResponseData = digResponseData || get('data')

  return clientApi({
    url,
    method: 'get',
    params,
    ...restConfig,
  })
    .then(response => {
      const formattedResponse =
        typeof transform === 'function'
          ? transform(getResponseData(response))
          : getResponseData(response)
      return camelize ? camelizeKeys(formattedResponse) : formattedResponse
    })
    .catch('Error')
}

export default instance
