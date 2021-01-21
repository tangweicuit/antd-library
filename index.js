/**
 * 重置查询参数
 * @param {Object} searchParams 表单查询参数
 */
export function resetSearchParams(searchParams) {
  const resetParams = {};
  for (let key in searchParams) {
    resetParams[key] = undefined;
  }
  return resetParams;
}
