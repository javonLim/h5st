声明:
本文章中所有内容仅供学习交流使用，不用于其他任何目的，抓包内容、敏感网址、数据接口等均已做脱敏处理，严禁用于商业用途和非法用途，否则由此产生的一切后果均与作者无关！

# 某东联盟h5st
将h5st分割出来看:
20250523205648382; 
xzwpadi3x2h0qwj4; 
586ae;         
tk03waf971c9c18ncWV8aQCb6JoWUz1yYsqT8m8dMu2TIQvwuWFw8bE-HIPRXNXPH0AvTfdqbzkxR3se2fo9Grr5sIa_; 
daf9a35e8740cdd66a550fdb429ec76dca3e9a6a1c3e0b88a16e35536d52e815;  
5.1;  
1748005007382;  
t6HsMeLU3pniGlrQ7KoVNt3R0NHmOGLm_VImOuMsCWbiOGLmAh4WMusmk_Mm5eLh_ioh7e4WKtbi1abiNlYV_m7WKJbW1eLWMtbgIhImOGLm_VqTHlYV3lsmOGujMi4i2abVIloi1Krg4arg8iYg5eYg7ObV3u7W2K7i6eLhMuMgMiXW41YWLlsmOGuj96sm0msh5lImOuMsCmshAqLj5W3XJ9YUIxZhGlsm0mMRMusmk_Mmil4TYVLVWZKiBRJh6msm0mcT-dITNlHmOuMsCmMi72YUXlsm0mMV_lsmOGujxtsmkmrm0mci9aHWMusmOuMsCqbiOGLm_qbRMlsmOusmk_sgBuMgMmbi5lImOusmOGujM6qSPdJd_eKT8uJdjVImOGLmBxoVApISMusmOuMsCurm0msg5lImOusmOGuj_uMgMSbRMlsmOusmk_ci9uMgMWbRMlsmOusmk_siOGLm5aHWMusmOuMsCurm0msh5lImOusmOGuj7ubiOGLm7aHWMusmOuMsCmchAqLj_msm0mci5lImOusmOGuj_uMgMC4RMusmOuMsCarm0m8SClsmOusmk_siOGLmClsmOusmk_siOGLmKRHmOusmOG_QOGLmK1YV6NXVMusmk_cPztMgMunSMusmk_Mm6WrQOCrh42YUXt8g_2si9usZgt8S3xoVAJ4ZMuMgMqYR7lsmOG_Q;  
399182c53ea19690d587d1b2bda506ec0dd52907d523d45130928cb27d2f29da;  
ri_uKJKT-JoRL1YRI9cQKxIWCeYU_tXW 

h5st组成：
  1.yyyyMMddhhmmssSSS格式的日期字符串
  2._fingerprint值：浏览器指纹  跟浏览器有关 可以是固定值
  3._app_id值 固定值 也可以写死 页面里获取。  
  4.token 由request_algo返回  可以是固定值 
  5.加密字符串  跟body有关  由request_algo返回的参数进行一些列的加密，结果sha256值
  6._version值：h5st版本号  固定值
  7.时间戳
  8.跟环境相关 可以是固定值  这一部分主要是 extend对象的参数一致即可
  9.加密字符串  加密方式跟参数5相同，加密字符串不同
  10.跟第4部分有关联 做了base64加密

有两种方法取得h5st，一般大佬都用纯算，咱们小菜鸟只会补环境！
步骤：
直接全局搜索h5st 找到  x.sign(w); 的位置下条件断点：w.functionId == 'unionSearchRecommend'，然后单步进入
将整个加密js_security_v3_0.1.5.js拉到本地，通过Promise.then取出h5st，主要的工作是一直补环境即可。

x.sign(w).then((res) => {
  console.log('h5st的长度==>',res['h5st'].length); // 1023
  console.log('h5st==>',res['h5st']);
});
  
