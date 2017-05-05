var activitiesToPromoteCommon = {};
activitiesToPromoteCommon.setRemByScreen = function(){//设置rem基础值，宽度的十分之一
	var doc = window.document;
	var docE = doc.documentElement;
	var tid;

	function refreshRem(){
		var width = docE.getBoundingClientRect().width;
		if(width > 540){ //最大宽度
			width = 540;
		}
		var rem = width / 10;//将屏幕宽度分成10份，1份为1rem
		docE.style.fontSize = rem + 'px';
	}
	window.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();
};
activitiesToPromoteCommon.setRemByScreen();

// var setStoragetime = localStorage.getItem("STORAGETIME");
// var currentTime = (new Date()).getTime();
// var time = currentTime - setStoragetime;
// if (time > 600000) {
//     localStorage.removeItem("BURIEDPOINT");//清除登录信息
// }

const common = {
	getParamFromURL:function(name){//获取具体参数，通过URL
        let url = window.location.href;
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
  	},
    findIndexObjInArr:function(arr,objattr,str){//获取指定属性值对象在数组中的下标
        let arrLength = arr.length;
        for (var i = arrLength - 1; i >= 0; i--) {
            if(arr[i][objattr] == str){
                return i;
            }
        }
        return -1;
    },
    isSomeTwoObj:function(a,b){//俩个对象是否相同
        let lenA = 0;
        let lenB = 0;//若属性个数不等，直接返回不等
        for(let name in a){
            if(a.hasOwnProperty(name)){
                lenA += 1;
                if(a[name] instanceof Array){//对象属性为数组时，转换为字符串
                    a[name] = a[name].join(',');
                }
            }
        }
        for(let name in b){
            if(b.hasOwnProperty(name)){
                lenB += 1;
                if(b[name] instanceof Array){//对象属性为数组时，转换为字符串
                    b[name] = b[name].join(',');
                }
            }
        }
        if(lenA !== lenB){
            return false;
        }
        for(let nameA in a){//枚举属性键值对是否相等
            let temResult = false;//枚举过程中用
            let valueA = a[nameA];
            if(valueA instanceof Object){//属性值是对象
                for(let nameB in b ){
                    if(nameA !== nameB){//属性名不相等，直接结束本次循环，进行下一个属性判断
                        continue;
                    }
                    let valueB = b[nameB];
                    if(isSomeTwoObj(valueA,valueB)){//属性名相等，递归判断两个对象是否相等
                        temResult = true;
                    }
                }
            }else{//属性值非对象
                for(var nameB in b ){
                    if(nameA !== nameB){//属性名不相等，直接结束本次循环，进行下一个属性判断
                        continue;
                    }
                    var valueB = b[nameB];
                    if(valueA !== valueB){//属性名相等，再判断属性值是否相等
                        continue;
                    }
                    temResult = true;
                }
            }
            if(!temResult){//只要a中有一个属性在b中没有匹配，则返回false
                return false;
            }
        }
        return true;
    }
}

exports.config = common;
