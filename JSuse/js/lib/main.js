/**
 * Created by Administrator on 2016/11/19.
 */
requirejs.config({
   baseUrl: "js",
   paths: {
       "jquery": "lib/jquery"
   }
});
requirejs(["app/index"]);