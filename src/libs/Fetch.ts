import { stringify } from 'qs';
import 'whatwg-fetch';

interface FetchConfig {
  headers?: object;
  body?: object;
  credentials?: string;
  cache?: string;
  redirect?: string;
  referrer?: string;
  referrerPolicy?: string;
  integrity?: string;
}

/**
 * Fetch
 * @example <caption>基本使用</caption>
 * import Fetch from '@/libs/Fetch.js'
 * const fetch = new Fetch(baseURL)
 * fetch.get(url, params, config)
 * fetch.post(url, data, config)
 * fetch.put(url, data, config)
 * fetch.delete(url, params, config)
 * @example <caption>在Vue中使用</caption>
 * this.$http.get(url, params, config)
 * this.$http.post(url, data, config)
 * this.$http.put(url, data, config)
 * this.$http.delete(url, params, config)
 */
class Fetch {
  host: string;
  private headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  private baseOptions = {
    mode: 'cors',
  };

  constructor(baseURL: string) {
    this.host = baseURL;
  }

  /**
   * 发起请求（带QueryString）
   * @param {string} url - 请求地址
   * @param {object} params - QueryString参数
   * @param {object} config - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @param {string} [method='GET'] - 请求方法
   * @return {Promise<any>}
   * @private
   */
  private requestForQueryString(url: string, params: object, config: FetchConfig, method = 'GET'):object {
    return new Promise(async (resolve, reject) => {
      try {
        let requestURL = `${this.host}${url}`;
        const querystring = stringify(params);
        requestURL += `?${querystring}`;
        const headers = Object.assign({}, this.headers, config.headers);
        const options = {
          headers,
          method,
        };
        const requestOptions = Object.assign({}, config, options);
        const request = new Request(requestURL, requestOptions);
        const response = await fetch(request);
        const responseData:object = await response.json();
        if (response.status < 400) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 发起请求（带FormData）
   * @param {string} url - 请求地址
   * @param {object} data - formData参数
   * @param {object} config - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @param {string} [method = 'POST'] - 请求方法
   * @return {Promise<any>}
   * @private
   */
  private requestForFormData(url: string, data: object, config: FetchConfig, method = 'POST'):object {
    return new Promise(async (resolve, reject) => {
      try {
        const requestURL = `${this.host}${url}`;
        const headers = Object.assign({}, this.headers, config.headers);
        const options = {
          headers,
          method,
          body: stringify(data),
        };
        const requestOptions = Object.assign({}, config, options, this.baseOptions);
        const request = new Request(requestURL, requestOptions);
        const response = await fetch(request);
        const responseData:object = await response.json();
        if (response.status < 400) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * GET请求
   * @param {string} url - 请求地址
   * @param {object} [params = {}] - QueryString参数
   * @param {object} [config = {}] - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @return {Promise<any>}
   */
  get(url: string, params = {}, config = {}):object {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.requestForQueryString(url, params, config, 'GET');
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * POST请求
   * @param {string} url - 请求地址
   * @param {object} [data = {}] - formData参数
   * @param {object} [config = {}] - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @return {Promise<any>}
   */
  post(url: string, data = {}, config = {}):object {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.requestForFormData(url, data, config, 'POST');
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * PUT请求
   * @param {string} url - 请求地址
   * @param {object} [data = {}] - formData参数
   * @param {object} [config = {}] - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @return {Promise<any>}
   */
  put(url: string, data = {}, config = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.requestForFormData(url, data, config, 'PUT');
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * DELETE请求
   * @param {string} url - 请求地址
   * @param {object} [params = {}] - QueryString参数
   * @param {object} [config = {}] - fetch的配置，详见@{link https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch|Fetch()}
   * @return {Promise<any>}
   */
  delete(url: string, params = {}, config = {}):object {
    return new Promise(async (resolve, reject) => {
      try {
        const response: object = await this.requestForQueryString(url, params, config, 'DELETE');
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Fetch;
