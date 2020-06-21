class lvalid{
    static valid() {
        let  el = document.getElementsByClassName("lvalid");
        for(let  i = 0; i < el.length; i++){
            if(el[i].getAttribute("required") === "required"){
                if(this.isNull(el[i].value)){
                    return el[i].getAttribute("info");
                }
            }
            if(el[i].getAttribute("valid") === "number" && !isNull(el[i].value)){
                if(!this.isNumber(el[i].value)){
                    return el[i].getAttribute("validInfo");
                }
            }
            if(el[i].getAttribute("valid") === "mobile" && !isNull(el[i].value)){
                if(!this.isMobile(el[i].value)){
                    return el[i].getAttribute("validInfo");
                }
            }
        }
        return true;
    }
    static getValue() {
        let  validResult = this.valid();
        if(validResult === true){
            let  el = document.getElementsByClassName("lvalid");
            let  data = {};
            for(let  i = 0; i < el.length; i++){
                data[el[i].getAttribute("id")] = el[i].value;
            }
            return data;
        }else{
            return validResult;
        }
    }

    /*用途：检查输入字符串是否为空或者全部都是空格*/
    static isNull(str) {
        if(str === 0){
            return false;
        }
        if (str === "" || str === null || str === undefined){
            return true;
        }
        let  regu = "^[ ]+$";
        let  re = new RegExp(regu);
        return re.test(str);
    }

    static isUsername(username) {
        let  first = username.substring(0, 1);
        if (!((first >= 'a' && first <= 'z') || (first >= 'A' && first <= 'Z'))) {
            return false;
        }
        let  rename = new RegExp("[a-zA-Z_][a-zA-Z_0-9]{0,}", "");
        return rename.test(username);
    }

    static isNumber(str) {
        let  regu = /^[-]{0,1}[0-9]{1,}$/;
        return regu.test(str);
    }

    static isMobile(s) {
        let  length = s.length;
        if(length !== 11){
            return false;
        }
        let  first = s.charAt(0);
        return first === 1;

    }

    static checkMobile(s) {
        var regu = /^[1][3|4|5|8][0-9]{9}$/;
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }
}
export default lvalid;
