/**
 * 重置查询参数
 * @param {Object} searchParams 表单查询参数
 */
export function resetSearchParams(searchParams, params) {
  const resetParams = {};
  for (let key in searchParams) {
    resetParams[key] = undefined;
  }
  return { ...resetParams, ...params };
}

/**
 * 获取查询参数
 * @param {EventTarget} e 事件对象
 * @param {Function} getFieldsValue 获取表单数据的方法
 * @param {paramsData} oldParams 初始参数
 * @param {Function} handleParams 操作参数的方法 默认不操作
 */
export function getSearchParams(
  e,
  getFieldsValue,
  oldParams = {},
  handleParams = params => params
) {
  e.preventDefault();
  let newParams = {
    ...oldParams,
    page: 1,
    ...getFieldsValue()
  };
  newParams = handleParams(newParams);
  return newParams;
}

/**
 *
 * @param {String} fileurl 文件地址
 * @param {String} filename 文件名称
 */
export function download(fileurl, filename) {
  const a = document.createElement("a");
  a.setAttribute("download", filename);
  a.setAttribute("href", fileurl);
  a.click();
}

/**
 * 
 * @param {any} params 
 * @param {Number} number 
 */
export function dely(params, number) {
  setTimeout(() => {
    console.log(params);
  }, 5000 * number);
}
