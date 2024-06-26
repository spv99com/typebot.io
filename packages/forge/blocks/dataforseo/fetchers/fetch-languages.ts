import { got } from 'got'
import { apiUrl, getHeaders } from '../api'
import { ApiResponse, LanguageData } from '../types'

export const fetchLanguages = async (
  apiLogin?: string,
  apiKey?: string,
  sandbox = false
) => {
  const response = await got
    .get(apiUrl('keywords_data/google_ads/languages', sandbox), {
      headers: getHeaders(apiLogin, apiKey),
    })
    .json<ApiResponse<LanguageData>>()

  const l = response.tasks[0].result.map((languge) => ({
    value: languge.language_code,
    label: languge.language_name,
  }))

  return l
}
