import {RSAKey, linebrk, hex2b64} from './rsa'
const Rsa = a => {
  let rsa = new RSAKey()
  let key = 'F1E9E08206E9BF8AD30488F78A510D4E02D7713FD6D9C0962D14578CC6401959D280976947524779ED9E61631F650CF0F24F25DEEB4602757A096D3C8378845472B8C8D2451A51C3AC143149BF70DA8C873171BCAB3C73FA42B67DD7C2EB305CB470BBD534C7D9E75CEDE9A0C69D1F3EA8B51781E4C4C363D4E41C8F16FD9167'
  rsa.setPublic(key, '10001')
  let res = rsa.encrypt(a)
  res = linebrk(hex2b64(res), 64)
  return res
}
export default Rsa
