var gameidsed = '';//游戏id
var carrieridsed = '';
var groupidsed = '';
var serveridsed = '';
var gtidsed = '';
var gameinfo = {};
var gameList = {};
var gameListArr = [];
var gametype='0';
var mobilegametype ='0';

/**
 * add by lilong
 * 2016-01-08
 * 主搜业务调整：搜索时候不区分苹果安卓
 */
var _gamealias;//手游别名
var _gamePlatforms;//手游游戏平台
var _gameGoodsTypes;//手游物品类型
var _gameInfo={};//游戏基本信息
var platformNames=['苹果','安卓','苹果越狱'];
//allgames 定义在game_base_info.js中 后台查询的所有游戏的基本信息

function changeSelected(num) {
    var _num = Math.abs(num - 1);
    $('#mynav' + _num).removeClass('nav_on');
    $('#mynav' + _num).addClass('nav_off');
    $('#mynav' + num).removeClass('nav_off');
    $('#mynav' + num).addClass('nav_on');
    $('#qhcon' + _num).hide();
    $('#qhcon' + num).show();
}

function save_game(){
    gameidsed = $('#span_search_game').attr('gameid');
    $.each(allgames, function(i, item) {
        if (item.gameid == gameidsed) {
            gameList = item;
            return false;
        }
    });
}

function loadCarriersGroupsByGame(gameid){
    $(".selectbox").removeClass("mobile-game");  //20160512Chb
    gameidsed = gameid;
    $.each(allgames, function(i, item) {
        if (item.gameid == gameid) {
            gametype = item.gametype;
            mobilegametype = item.mobilegametype;
            gameinfo = item;
            return false;
        }
    });

    //根据游戏类型显示主搜不同内容样式
    showMainSearchStyleByGameType(gametype);

    //查询区服信息
    var arr_find = false;
    if (gameListArr && gameListArr.length > 0) {
        $.each(gameListArr,function(i, item){
            if (item.gameid == gameid) {
                gameList = item;
                arr_find = true;
                return false;
            }
        })
    }
    if (!arr_find) {
        $.ajax({
            type : 'post',
            url : '/getGameQuFuInfo.action',
            data : {
                gameid : gameid
            },
            dataType : 'json',
            success : function(json) {
                if (!json) {
                    return false;
                }
                gameList = json;
                gameListArr.push(gameList);
                selectOnlineGameEvent();
            }
        });
    } else {
        selectOnlineGameEvent();
    }
}

function showMainSearchStyleByGameType(gameType){
    if(gameType==0){
        var type=$(".selectbox .g_type");
        var typeClone=type.clone(true);
        type.remove();
        $(".selectbox li:last-child").before(typeClone);
        var typeMain=$("#main_con_type");
        var typeMainClone=$("#main_con_type").clone(true);
        typeMain.remove();
        $(".b_blue_box").append(typeMainClone);
    }else{
        var type=$(".selectbox .g_type");
        var typeClone=type.clone(true);
        type.remove();
        $(".selectbox").find("li").eq(0).after(typeClone);
        var typeMain=$("#main_con_type");
        var typeMainClone=$("#main_con_type").clone(true);
        typeMain.remove();
        $(".b_blue_box").find(".main_con").eq(0).after(typeMainClone);
    }
}

function selectOnlineGameEvent(){
    $('.g_name').html(gameList.gamename);
    $('.g_name').attr('gameid',gameidsed);
    if(gameList.mobilegametype==0){
        $('.g_run').html('账号版本');
    }else{
        $('.g_run').html('运营商');
    }

    $('.g_run').attr('carrierid','');
    $('.g_run').html('运营商');
    $('.g_area').attr('groupid','');
    $('.g_area').html('游戏区');
    $('.g_service').attr('serverid','');
    $('.g_service').html('游戏服务器');
    $('.g_type').attr('gtid','');
    $('.g_type').html('物品类型');
    $('.g_gameplatform').hide();
    $('.g_gameplatform').html('游戏平台');
    $('.close_btn').trigger('click');
    if (gameList.carriers) {
        //$('#search_main').css('width', '60px');
        $('.g_run').show();
        $('.g_run').trigger('click');
    } else {
        //$('#search_main').css('width', '200px');
        $('.g_run').hide();
        $('.g_gameplatform').hide();
        $('.g_area').trigger('click');
    }
}

function loadCarrierGroupServerInfoBySelectGame(gameid){
    //查询区服信息
    var arr_find = false;
    if (gameListArr && gameListArr.length > 0) {
        $.each(gameListArr,function(i, item){
            if (item.gameid == gameid&&typeof(item.carrier)!="undefined") {
                gameList = item;
                arr_find = true;
                return false;
            }
        })
    }

    if(!arr_find) {
        $.ajax({
            type: 'post',
            url: '/getGameQuFuInfo.action',
            async:false,
            data: {
                gameid: gameid
            },
            dataType: 'json',
            success: function (json) {
                if (!json) {
                    return false;
                }
                gameList = json;
                gameListArr.push(gameList);
            }
        });
    }
}

function loadGroupByCarrier(gameid, carrierid){
    carrieridsed = carrierid;
    var carrier = {};
    $.each(gameList.carriers, function(i, item) {
        if (item.carrierid == carrierid) {
            carrier = item;
            return false;
        }
    });
    $('.g_run').html(carrier.carriername);
    $('.g_run').attr('carrierid',carrierid);
    $('.g_area').attr('groupid','');
    $('.g_area').html("游戏区");
    $(".g_service").attr("serverid","");
    $('.g_service').html("游戏服务器");
    $('.close_btn').trigger('click');
    $('.g_area').trigger('click');
}

function loadServersByGroup(gameid,groupid,carrierid){
    groupidsed = groupid;
    var group = {};
    var carrier = {};
    if (carrierid && carrierid != '') {
        carrieridsed = carrierid;
        $.each(gameList.carriers, function(i, item) {
            if (item.carrierid == carrierid) {
                carrier = item;
                return false;
            }
        });
        $.each(carrier.groups, function(i, item) {
            if (item.groupid == groupid) {
                group = item;
                return false;
            }
        });
    } else {
        $.each(gameList.groups, function(i, item) {
            if (item.groupid == groupid) {
                group = item;
                return false;
            }
        });
    }
    $('.g_area').html(group.groupname);
    $('.g_area').attr('groupid',groupid);
    $(".g_service").attr("serverid","");
    $('.g_service').html("游戏服务器");
    $('#letter_server').empty();
    $.each(group.servers, function(i, item) {
        $('#letter_server').append(
            '<dt><a serverid="' + item.serverid
            + '" onclick="loadGtidByGame(\'' + gameid + '\',\''
            + item.serverid + '\',\'' + item.servername + '\')">'
            + item.servername + '</a></dt>');
    });
    $('.close_btn').trigger('click');
    $('.g_service').trigger('click');
}

    function loadGtidByGame(gameid,serverid,servername){
    serveridsed = serverid;
    $('#letter_gtid').empty();
    $('.g_service').html(servername);
    $('.g_service').attr('serverid',serverid);
    $('.close_btn').trigger('click');
    $('.g_type').trigger('click');
}

function loadGtidByMobileGame(gameid,serverid,servername){
    serveridsed = serverid;
    $('#letter_gtid').empty();
    $('.g_service').html(servername);
    $('.g_service').attr('serverid',serverid);
    $('.close_btn').trigger('click');
    $(".b_blue_box .main_con").hide();
    event.stopPropagation();
    //$('.g_type').trigger('click');
}

//选择指定物品类型触发事件
function searchGtid(gtid,gtname){
    $(".g_type").html(gtname);
    $(".g_type").attr('gtid',gtid);
    $(".close_btn").trigger("click");
    var groupid = $('.g_area').attr('groupid');
    var serverid = $('.g_service').attr('serverid');
    if(gtid=='100137'){
        window.location.href='/goods-buying-'+gameidsed+'-'+gtid+'.html';
    }else if(gtid=='100116'||gtid=='199999'){
        window.location.href='/goods-buying-'+gameidsed+'-'+(groupid==''?'0':groupid)+'-'+(serverid==''?'0':serverid)+'-'+gtid+'.html';
    }
}

function search_loadGtid(gameid, serverid, servername) {
    gameidsed = gameid;
    serverided = serverid;
    if ($('#span_search_gtid').attr('gtid') == '') {
        loadGtids();
        $('.option_wz3').hide();
        $('.option_wz4').show();
    } else {
        $('.option_wz3').hide();
    }
    $('#span_search_server').attr('serverid', serverid);
    $('#span_search_server').text(servername);
    return false;
}

$(function() {
    $(".close").click(function(e) {
        $('.option').hide();
        e.stopPropagation();
        clearGame();
        clearOther();
    });
})

function quicklySearch() {
    var txt = $('#txt_search_quickly').val();
    if (txt == '') {
        return false;
    }
    txt = txt.toLowerCase();
    var _txt = '';
    $.each(txt, function(i, item) {
        if (/[\u4e00-\u9fa5\d]/.test(item)) {
            _txt += Character.getPinyinOfChar(item);
        } else {
            _txt += item;
        }
    });
    $('.search_yxm[type="game"]').empty();
    $.each(allgames, function(i, item) {
        if (Character.testPinyinAbbrByPinyin(Character
                .getPinyin2(item.gamename).pinyin, _txt)) {
            $('.search_yxm[type="game"]').append(
                '<a class="wenzi" gameid="' + item.gameid
                + '" onclick="search_loadGroup(\'' + item.gameid
                + '\')">' + item.gamename + '</a>');
        }
    });
    return false;
}



function loadGameDateNew(em,gametype,mobilegametype){
    var html="";
    var mobileGameArr=[];
    $.each(allgames,function(i,item){
        if(gametype=='0'){
            if(item.gametype=='0'){
                if(em=='热门游戏'){
                    if (item.hot!=null && item.hot!='null' && item.hot!='') {
                        if (item.color!=null && item.color!='null' && item.color!='') {
                            html += '<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')" ><font style="color: '  + item.color+'">'+item.gamename+'</font></a></dt>';
                        }else{
                            html += '<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')" >'+item.gamename+'</a></dt>';
                        }                    }
                }else if(item.px==em){
                    if (item.hot!=null && item.hot!='null' && item.hot!='') {
                        html += '<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')"><font style="color:#ff6700;">'+item.gamename+'</font></a></dt>';
                    }else{
                        html += '<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')">'+item.gamename+'</a></dt>';
                    }
                }
            }
        }else{
            if(item.gametype=='1'){
                if($.inArray(item.gamealias,mobileGameArr)<0) {
                    mobileGameArr.push(item.gamealias);
                    if(em=='热门游戏'){
                        if (item.hot!=null && item.hot!='null' && item.hot!='') {// && (item.mobilegametype == mobilegametype)
                            if (item.color!=null && item.color!='null' && item.color!='') {
                                html += '<dt><a href="javascript:void(0)"  onclick="selectMobileGameEvent(\''+item.gamealias+'\')" ><font style="color:'+item.color+'">'+item.gamealias+'</font></a></dt>';
                            }else{
                                html += '<dt><a href="javascript:void(0)"  onclick="selectMobileGameEvent(\''+item.gamealias+'\')" >'+item.gamealias+'</a></dt>';

                            }
                        }
                    }else if(item.px==em){
                        if (item.hot!=null && item.hot!='null' && item.hot!='') {// && (item.mobilegametype == mobilegametype)
                            html += '<dt><a href="javascript:void(0)"  onclick="selectMobileGameEvent(\''+item.gamealias+'\')"><font style="color: #ff6700;">'+item.gamealias+'</font></a></dt>';
                        }else{
                            //if (item.mobilegametype == mobilegametype) {
                            html += '<dt><a href="javascript:void(0)"  onclick="selectMobileGameEvent(\''+item.gamealias+'\')">'+item.gamealias+'</a></dt>';
                            //}
                        }
                    }
                }
            }

        }
    });
    //20160613Chb Start
    if(html.length==0){
        html="<span class=none-game>(暂无游戏)</span>"
    };
    //20160613Chb End
    $('#letter_game').html(html);
}

function selectMobileGameEvent(gamealias){
    /**
     * 1.保存选择游戏信息
     * 2.展开平台选择框
     */
    _gamealias = gamealias;
    //_gamePlatforms='';
    //_gameGoodsTypes='';
    _gameInfo={};
    $.each(allgames, function(i, item) {
        if (item.gamealias == gamealias && item.gametype==1) {
            gametype = item.gametype;
            mobilegametype = item.mobilegametype;
            gameinfo = item;
            //setGamePlatforms(item.mobilegametype);
            //setGameGoodsTypes(item.splxids);
            setGameInfo(item);
        }
    });


    gameList={};
    showMainSearchStyleByGameType(gametype);

    //所选游戏赋值给游戏框
    $('.g_name').html(_gameInfo.gamealias);
    $('.g_name').attr('gameid',_gameInfo.shortname);
    //if(mobilegametype==0){
    //    $('.g_run').html('账号版本');
    //}else{
    //    $('.g_run').html('运营商');
    //}
    //重置其它所有选项
    $('.g_type').attr('gtid','');
    $('.g_type').html('物品类型');
    $('.g_gameplatform').attr('gameplatform','');
    $('.g_gameplatform').html('平台');
    $('.g_run').attr('carrierid','');
    $('.g_run').html('运营商');
    $('.g_area').attr('groupid','');
    $('.g_area').html('游戏区');
    $('.g_service').attr('serverid','');
    $('.g_service').html('游戏服务器');

    $('.close_btn').trigger('click');
    //20160512Chb Start
    //$('#search_main').css('width', '60px');
    $(".selectbox").addClass("mobile-game");
    //$('.g_area').show(); //实际去掉
    //20160512Chb End
    $('.g_run').show();
    $('.g_gameplatform').show();
    $('.g_type').trigger('click');
}


function selectMobileGtidEvent(value,text){
    var currentGtid=$(".g_type").attr("gtid");
    var platform=$(".g_gameplatform").attr("gameplatform");

    $('.g_type').html(text);

    if(typeof platform =="undefined" || platform==""){//当前未选择平台
        if(value.indexOf("x")==-1){//物品类型平台唯一
            $('.g_type').attr("gtid",value);
            var platformValue=value.substring(6,7);
            selectMobilePlatform(platformValue,platformNames[platformValue]);//todo:
        }else{//物品类型平台不唯一
            $('.g_type').attr("gtid",value);
            $('.close_btn').trigger('click');
            $('.g_gameplatform').trigger('click');
        }
    }

    if(platform){//当前有选择平台
        if(value.indexOf("x")==-1){//物品类型平台唯一
            var platformValue=value.substring(6,7);
            if(platform==platformValue){//物品类型对应的平台等于当前平台
                $('.g_type').attr("gtid",value);
                $('.close_btn').trigger('click');
                $('.g_gameplatform').trigger('click');
            }else{//物品类型对应的平台不等于当前平台
                $('.g_type').attr("gtid",value);
                selectMobilePlatform(platformValue,platformNames[platformValue]);//todo:
            }
        }else{//根据平台确定物品类型
            confrimGtidByPlatform(value,platform);
            $('.close_btn').trigger('click');
            $('.g_gameplatform').trigger('click');
        }
    }
}

//多平台合并后的gtid值根据指定平台确认平台相关gtid值
function confrimGtidByPlatform(gtidMerge,platform){
    $.each(gtidMerge.split("x"),function(i,item){
        if(item.substring(6,7)==platform){
            $('.g_type').attr("gtid",item);
            return false;
        }
    });
}

function confirmMobilePlatform(gtid,platform) {
    var platformValue=gtid.substring(6,7);
    var platformName="";
    if(gtid.length==7&&platform==""){//表示物品类型为某一个平台独有

        $.each(_gameInfo.platforms,function(i,item){
            if(platformValue==item){
                platformName=_gameInfo.platformNames[i];
            }
        });

        //选择平台
        selectMobilePlatform(platformValue,platformName);
    }

    if(gtid.length==7&&platform!=gtid.substring(6,7)){
        $.each(_gameInfo.platforms,function(i,item){
            if(platformValue==item){
                platformName=_gameInfo.platformNames[i];
            }
        });
        //选择平台
        selectMobilePlatform(platformValue,platformName);
    }

    var currentPlatform=$(".gameplatform").attr("gameplatform");
    if(gtid.indexOf("x")>0&&typeof(currentPlatform)!="undefined"&&currentPlatform!=""){
        $.each(currentPlatform.split("x"),function(i,item){
            if(item.substring(6,7)==currentPlatform){
                $('.g_type').attr("gtid",currentPlatform);
                return false;
            }
        });
    }
}

function selectMobilePlatform(value,text){
    var currentPlatform= $(".g_gameplatform").attr("gameplatform");
    var currentGoodsType= $(".g_type").attr("gtid");
    var currentGoodsTypeName=$(".g_type").html();
    $('.g_gameplatform').html(text);

    //重复选择相同平台无效
    if(currentPlatform==value){
        $('.close_btn').trigger('click');
        $('.g_run').trigger('click');
        return false;
    }
    $('.g_gameplatform').attr('gameplatform',value);

    //确定gameid
    var gameid=confirmGameIdByPlatform(value);
    $(".g_name").attr('gameid',gameid);


    if(typeof currentGoodsType=="undefined"||currentGoodsType==""){
    }

    if(currentGoodsType){
        var goodsType= confirmGtNamebyPlatform(currentGoodsTypeName,value);
        if(goodsType){
            $(".g_type").attr("gtid",goodsType);
        }else{
            $(".g_type").attr("gtid","");
            $(".g_type").html("物品类型");
        }
    }
    $('.g_run').attr('carrierid','');
    $('.g_run').html('运营商');
    $('.g_area').attr('groupid','');
    $('.g_area').html('游戏区');
    $('.g_service').attr('serverid','');
    $('.g_service').html('游戏服务器');
    loadCarrierGroupServerInfoBySelectGame(gameid );
    $('.close_btn').trigger('click');
    $('.g_run').trigger('click');
}

function confirmGtNamebyPlatform(gtName,platform){
    var res="";
    var goosTypeInfo=_gameInfo.goosTypeInfo;
    $.each(goosTypeInfo,function(i,item){
        $.each(item.split(","),function(i2,item2){
            if(item2.split(":")[3]==gtName){
                if(platform==_gameInfo.platforms[i]){
                    res=item2.split(":")[0]+platform;
                    return false;
                }
            }
        });
    });
    return res;
}

function confirmGameIdByPlatform(value){
    var res="";
    var platforms=_gameInfo.platforms;
    var gameids=_gameInfo.gameids;
    var indexFlag;
    $.each(platforms,function(i,item){
        if(value==item){
            indexFlag=i;
            return false;
        }
    });
    var gameid=gameids[indexFlag];
    res=gameid;
    return res;
}

//设置选择手游的基本信息
function setGameInfo(item){
    _gameInfo.gamealias=item.gamealias;
    _gameInfo.shortname=item.shortname;
    gameInfoPropertyPush('gameids',item.gameid);
    gameInfoPropertyPush('platforms',item.mobilegametype);
    setPlatFormNames(item.mobilegametype);
    gameInfoPropertyPush('goosTypeInfo',item.splxids);
}

function gameInfoPropertyPush(proName,value){
    if(_gameInfo[proName]==null){
        _gameInfo[proName]=[];
    }
    _gameInfo[proName].push(value);
}

function setPlatFormNames(mobilegametype){
    if(mobilegametype==0){
        gameInfoPropertyPush('platformNames',"苹果");
    }else if (mobilegametype==1){
        gameInfoPropertyPush('platformNames',"安卓");
    }else if (mobilegametype==2){
        gameInfoPropertyPush('platformNames',"苹果越狱");
    }
}

function setGamePlatforms(type){
    if(_gamePlatforms){
        _gamePlatforms+=","+type;
    }
}

function setGameGoodsTypes(it){
    if(_gameGoodsTypes){
        _gameGoodsTypes+=","+it;
    }
}

$('#searchBtn').click(
    function() {
        var gametypename = $(".main_name_select").children(".hover").html();
        var gtype = gametypename=='网络游戏'?0:1;
        var mtype = gametypename=='手机游戏'?0:1;
        if(gametypename=="苹果阅读"){
            return false;
        }
        var txt = $('#sselect_gamename').val();
        if (txt == '') {
            return false;
        }
        txt = txt.toLowerCase().replace(/(.)(?=[^$])/g, "$1,").split(",");
        var _txt = '';
        $.each(txt, function(i, item) {
            if (/[\u4e00-\u9fa5\d]/.test(item)) {
                _txt += Character.getPinyinOfChar(item);
            } else {
                _txt += item;
            }
        });
        $('#hotgame').click();
        $('#letter_game').empty();
        var mobilegameArr=[];
        $.each(allgames, function(i, item) {
            if (Character.testPinyinAbbrByPinyin(getPy(item.gamename), _txt)) {
                var gametype = item.gametype;
                var mobiletype = item.mobilegametype;
                if(gtype==0&&gametype==0){
                    $('#letter_game').append('<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')" >'+item.gamename+'</a></dt>');
                }else if(gtype==1&&gametype==1){
                    if($.inArray(item.gamealias,mobilegameArr)<0){
                        mobilegameArr.push(item.gamealias);
                        $('#letter_game').append('<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="selectMobileGameEvent(\''+item.gamealias+'\')" >'+item.gamealias+'</a></dt>');
                    }
                }
            }
        });
        return false;
    });
$(document).click(function(event) {
    var et = $(event.target);
    if (et.closest('.option').length == 0) {
        $('.option').hide();
        clearGame();
        clearOther();
    }
});

function clearGame(){
    $.each($('.cont2:first').find('li'), function(i, item) {
        if($(item).attr('id')!=''){
            $(item).empty();
        }
    });
    $.each($('.cont2:last').find('li'), function(i, item) {
        if($(item).attr('id')!=''){
            $(item).empty();
        }
    });

}

function clearOther(){
    $('.search_yxm[type="group"]').empty();
    $('.search_yxm[type="server"]').empty();
    $('.search_yxm[type="gtid"]').empty();
}


function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    $('link').append(script);
}


function loadCSS(url){
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.rev = "stylesheet";
    cssLink.type = "text/css";
    cssLink.media = "screen";
    cssLink.href = url;
    $('link').append(cssLink);
}

$('#search_main').click(
    function() {
        var gametypename = $(".main_name_select").children(".hover").html();
        var gtype = gametypename=='网络游戏'?0:1;
        if($('.t_search a:eq(1)').hasClass('hover')){
            simgleSearch();
        }else{
        	var addition_url = '',keywords_goodsid = '',keywords_shortname = '',keywords_gametype = '';
        	var gameid = $('.g_name').attr('gameid');
        	
        	var keywords = $(".placeholder").find("input").val();
            keywords = $.trim(keywords);
        	if(keywords != "" && $.trim(keywords).length > 0){
            	if(!isNaN(keywords) && keywords.length > 5){
            		$.ajax({
                        type : 'post',
                        url : '/procurement/getGameByGoodsid.action',
                        async : false,
                        data : {
                            g : keywords
                        },
                        dataType : 'json',
                        success : function(json) {
                            if (json.success == 'F') {
                                return false;
                            }
                            gameid = json.gameid;
                            keywords_shortname = json.shortname;
                            keywords_goodsid = json.goodsid;
                            keywords_gametype = json.gametype;
                        }
                    });        		
            	}else{
            		if(gameid == ""){
            			alert("请选择游戏或者使用商品编码");
            			return false;
            		}
            	}
            	
            	if(keywords_goodsid == ''){
                	addition_url = "?k="+keywords;
                	
                	if(gameid == ""){
            			alert("请选择游戏或者使用商品编码");
            			return false;
            		}
                }else{
                	addition_url = "?g="+keywords_goodsid;
                	if(keywords_shortname != "" && keywords_gametype == 1){
                		gameid = keywords_shortname;
                	}
                	
                	$('.g_run').attr('carrierid','');
            		$('.g_area').attr('groupid','');
            		$('.g_service').attr('serverid','');
            		$('.g_type').attr('gtid','');
                }
        	}
        	
        	if (gameid == '') {
                window.location.href = '/gamelistshow.html';
                return false;
            }
        	
            if(gtype=="1"){
                
                var carrierid = $('.g_run').attr('carrierid');
                var groupid = $('.g_area').attr('groupid');
                var serverid = $('.g_service').attr('serverid');
                var gtid = $('.g_type').attr('gtid');
                if(gtid=="100137"||gtid=="1001371"){//首充号代充特殊跳转
                    window.location="http://shouyou.7881.com/"+_gameInfo.shortname.toLowerCase()+"/android/goods-100137-buy.html";
                    return false;
                }

                var gtidUrl="";
                //if(gtid.indexOf("x")>0){
                //    $.each(gtid.split("x"),function(i,item){
                //        if(gtidUrl==""){
                //            gtidUrl=item.substring(0,6);
                //        }else{
                //            gtidUrl+="x"+item.substring(0,6);
                //        }
                //    });
                //}else
                if(gtid.length==7){
                    gtidUrl=gtid.substring(0,6);
                }else{
                    gtidUrl=gtid;
                }



                if(gameinfo.gamename=='王者荣耀' && gtidUrl.indexOf("100064")>=0){
                    window.location.href = "http://dl.7881.com?gameid=wzry";
                    return false;
                }

                var platform = $('.g_gameplatform').attr('gameplatform');
                if ( platform== '') {
                    if(gameid.replace(/[^a-zA-Z]/g, '').length>1) {
                        gameid=gameid.toLowerCase();
                    }
                    window.location.href='http://shouyou.7881.com/'+gameid+'-'+(carrierid==''?'0':carrierid)+'-'+(groupid==''?'0':groupid)+'-'+(serverid==''?'0':serverid)+'-'+(gtidUrl==''?'0':gtidUrl)+'-0-0-0-0-0-0-0.html'+addition_url;
                    return false;
                } else {
                    if (gameList && carrierid != '' && gtid != '') {
                        $.each(gameList.carriers, function(i, item) {
                            if (item.carrierid == carrierid) {
                                $.each(item.goodstype.split(','), function(j, _item){
                                    if (_item.split(':')[0] == gtid && _item.split(':')[1] == '0') {
                                        carrierid = '0';
                                        return false;
                                    }
                                });
                                return false;
                            }
                        });
                    }
                    window.location.href='/buy-'+gameid+'-'+(carrierid==''?'0':carrierid)+'-'+(gtidUrl==''?'0':gtidUrl)+'-'+(groupid==''?'0':groupid)+'-'+(serverid==''?'0':serverid)+'-0-0-0-0-0-0.html'+addition_url;
                }
                return false;
            }else {
                
                var carrierid = $('.g_run').attr('carrierid');
                var groupid = $('.g_area').attr('groupid');
                var serverid = $('.g_service').attr('serverid');
                var gtid = $('.g_type').attr('gtid');
                if (carrierid == '' && groupid == '' && serverid == '' && gtid == '') {
                    if (gtype == 1) {
                        window.location.href = '/' + gameid + '-0-0-0-0-0-0-0-0-0-0-0.html'+addition_url;
                    } else {
                        window.location.href = '/buy-' + gameid.toUpperCase() + '.html'+addition_url;
                    }
                    return false;
                } else {
                    if (gameList && carrierid != '' && gtid != '') {
                        $.each(gameList.carriers, function (i, item) {
                            if (item.carrierid == carrierid) {
                                $.each(item.goodstype.split(','), function (j, _item) {
                                    if (_item.split(':')[0] == gtid && _item.split(':')[1] == '0') {
                                        carrierid = '0';
                                        return false;
                                    }
                                });
                                return false;
                            }
                        });
                    }
                    var gtidUrl = "";
                    if (gtid.indexOf(":") > 0) {
                        gtidUrl = 0;
                    } else {
                        gtidUrl = gtid;
                    }
                    if(gameid=='G603'&&	gtid=='100144'){
                    	 window.location.href = "http://dl.7881.com";
                    	 return false;
                    }
                    window.location.href = '/buy-' + gameid + '-' + (carrierid == '' ? '0' : carrierid) + '-' + (gtidUrl == '' ? '0' : gtidUrl) + '-' + (groupid == '' ? '0' : groupid) + '-' + (serverid == '' ? '0' : serverid) + '-0-0-0-0-0-0.html'+addition_url;
                }
                return false;
            }
        }
    });


function simgleSearch() {
    var txt_search = $('#txt_search_simple').val();
    if (txt_search.replace(/(^\s*)|(\s*$)/g, '') == '') {
        alert('搜索内容为空');
        return false;
    }
    if ($('.xii_row').length == 1) {
        txt_search = $('.xii_row').text();
    }
    var flag = true;
    $.each(allgames, function(i, item) {
        if (item.gamename == txt_search) {
            window.location.href = '/buy-' + item.gameid + '.html';
            flag = false;
            return false;
        }
    });
    if (flag) {
        alert('未找到该游戏区服对应的商品');
    }
    return false;
}



$(document).ready(function(){

    //初始化智能输入词库
    $.ajax({
        type : 'post',
        url : '/queryGameNameArray.action',
        dataType : 'text',
        success : function(data) {
            if (!data) {
                return false;
            }
            var game_store = data.split(',');
            $('#txt_search_simple').xqkinput({
                words : game_store,
                width : 602, 		//Chb20160513
                height : 169		//Chb20160513
            });
        }
    });
    
    //Chb20160513 实际去掉
    $('#txt_search_simple').xqkinput({
        words : "aaa",
        width : 602,
        height : 165
    });
    //Chb20160513 实际去掉
    
    //简单搜索/精准搜索
    $(".t_search a").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".s_blue_box ul").eq($(".t_search a").index(this)).show().siblings().hide();
    });
    //游戏名/类型/平台/区服/
    $(".selectbox li").click(function(){
        //$(".top_search .arrow").stop().animate({'left':'40px'});
        $(".b_blue_box div").eq($(".selectbox li").index(this)).show().siblings().hide();
    });

    //游戏
    $('.g_name').bind('click',function(event){
        $("#sselect_gamename").val("");//点击游戏框时，清除快搜值
        $('.top_search .arrow,.b_blue_box').show();
        var gameid=$('.g_name').attr('gameid');
        if(gameid!=''){
            loadGameDateNew('热门游戏', gametype, mobilegametype);
            if (gametype == 0) {
                $('.main_name_select a:eq(0)').trigger('click');
            }else if(gametype==1){
                $('.main_name_select a:eq(1)').trigger('click');
            }
        } else if(gametype == 0 && crrCheckText=='1'){
            loadGameDateNew('热门游戏','0');
            $('.main_name_select a:eq(0)').trigger('click');
            crrCheckText='2';//用于限制gameid!=null
        };
        
        //20160512Chb Start
	    leftnum($(this).index());
	    $(".gamename_quicksearch").find("input").trigger('blur');
	    //$('.top_search .arrow').stop().animate({'left': '40px'});
	    //20160512Chb End
	    
        event.stopPropagation();
    });

    //物品类型
    $('.g_type').click(function(event){
        if(gametype==0) {//端游的处理内容
            var gameid = $('.g_name').attr('gameid');
            if (gameid != '') {
                $('#letter_gtid').empty();

                $.each(gameinfo.splxids.split(','), function (i, item) {
                    var lxid = item.split(':')[0];
                    var lxname = item.split(':')[1];
                	 $('#letter_gtid').append(
                             '<dt><a gtid="' + lxid
                             + '" onclick="searchGtid(\'' + lxid + '\',\''
                             + lxname + '\')">' + lxname + '</a></dt>');
                });
            }
            $('.top_search .arrow,.b_blue_box').show();

           //20160512Chb Start
		    leftnum($(this).index());
            /*if ($('.g_run').is(':visible')) {
                $('.top_search .arrow').stop().animate({'left': '480px'});
            } else {
                $('.top_search .arrow').stop().animate({'left': '330px'});
            }*/
           //20160512Chb End
           
            event.stopPropagation();
            $('dl#letter_gtid dt a').click(function (event) {//物品添加事件，选择了指定物品类型隐藏当前层
                $('.top_search .arrow,.b_blue_box').hide();
                event.stopPropagation();
            });
        }else if(gametype=1){//手游
            var gameid = $('.g_name').attr('gameid');
            var platform=$('.g_gameplatform').attr('gameplatform');
            if(gameid){
                $('#letter_gtid').empty();
                var goodsTypeInfoArr=[];
                var goodsTypeValue=[];
                $.each(_gameInfo.goosTypeInfo,function(j,goodsTypeInfo){
                    $.each(goodsTypeInfo.split(","),function(i,item){
                        var lxid=item.split(":")[0];
                        var lxname=item.split(":")[1];
                        var lxalias=item.split(":")[3].trim();
                        //if( platform==""||_gameInfo.platforms[j].toString()==platform) {
                            if ($.inArray(lxalias, goodsTypeInfoArr) < 0) {
                                goodsTypeInfoArr.push(lxalias);
                                goodsTypeValue.push(lxid + "" + _gameInfo.platforms[j]);
                            } else {
                                var aliasIndex = $.inArray(lxalias, goodsTypeInfoArr);
                                var lxvalueOld = goodsTypeValue[aliasIndex];
                                //if (lxvalueOld.indexOf(lxid) < 0) {
                                //    //var lxvalue = lxvalueOld + "," + lxid + ":" + _gameInfo.platforms[j]
                                //    var lxvalue = lxvalueOld + "x" + lxid + "" + _gameInfo.platforms[j];
                                //    goodsTypeValue[aliasIndex] = lxvalue;
                                //}
                                var lxvalue = lxvalueOld + "x" + lxid + "" + _gameInfo.platforms[j];
                                goodsTypeValue[aliasIndex] = lxvalue;
                            }
                        //}
                    });
                });

                $.each(goodsTypeInfoArr,function(i,item){
                    $('#letter_gtid').append(
                        '<dt><a gtid="' + goodsTypeValue[i]
                        + '" onclick="selectMobileGtidEvent(\'' + goodsTypeValue[i] +'\',\''+item+'\')">' + item + '</a></dt>');
                });
                $('.top_search .arrow,.b_blue_box').show();
                
                //20160512Chb Start
				leftnum($(this).index());
				// $('.top_search .arrow').stop().animate({'left':'230px'});
		        //20160512Chb End
		        
            }else{}
        }
        event.stopPropagation();
    });

    //游戏平台
    $(".g_gameplatform").bind('click',function(event){
        var gameid = $('.g_name').attr('gameid');
        if(gameid){
            $("#letter_gameplatform").empty();
            var platforms=_gameInfo.platforms;
            var platformNames=_gameInfo.platformNames;
           // platforms.sort(function(a,b){return a>b?1:-1});
            $.each(platforms,function(i,item){
                $('#letter_gameplatform').append(
                '<dt><a gameplatform=\''+item+'\' onclick="selectMobilePlatform(\'' + item +'\',\''+platformNames[i]+'\')">' + platformNames[i] + '</a></dt>');
            });
        }

        $('.top_search .arrow,.b_blue_box').show();
        
        //20160512Chb Start
		leftnum($(this).index());
		// $('.top_search .arrow').stop().animate({'left':'230px'});
        //20160512Chb End
        
        event.stopPropagation();

    });

    //运营商
    $('.g_run').click(function(event){
        var gameid=$('.g_name').attr('gameid');
        if(gameid!=''){
            $('#letter_carrier').empty();
            $.each(gameList.carriers, function(i, item) {
                $('#letter_carrier').append(
                    '<dt><a href="javascript:void(0)" carrierid="'+item.carrierid+'"  onclick="loadGroupByCarrier(\'' + gameid
                    + '\',\'' + item.carrierid + '\')">'+item.carriername+'</a></dt>'
                );
            });
        }
        $('.top_search .arrow,.b_blue_box').show();
        console.log("111")
        //20160512Chb Start
		leftnum($(this).index());
		// $('.top_search .arrow').stop().animate({'left':'320px'});
        //20160512Chb End
        
        event.stopPropagation();
    });

    //游戏区
    $('.g_area').click(function(event){
        var gameid=$('.g_name').attr('gameid');
        if(gameid!=''){
            $('#letter_group').empty();
            var carrierid = $('.g_run').attr('carrierid');
            if (carrierid != '') {
                var carrier = {};
                $.each(gameList.carriers, function(i, item) {
                    if (item.carrierid == carrierid) {
                        carrier = item;
                        return false;
                    }
                });
                $.each(carrier.groups, function(i, item) {
                    $('#letter_group').append(
                        '<dt><a href="javascript:void(0)" groupid="'+item.groupid+'"  onclick="loadServersByGroup(\'' + gameList.gameid
                        + '\',\'' + item.groupid + '\',\''+carrierid+'\')">'+item.groupname+'</a></dt>'
                    );
                });
            } else {
                $.each(gameList.groups, function(i, item) {
                	$('#letter_group').append(
                            '<dt><a href="javascript:void(0)" groupid="'+item.gameid+'"  onclick="loadServersByGroup(\'' + gameList.gameid
                            + '\',\'' + item.groupid + '\',\'\')">'+item.groupname+'</a></dt>'
                        );
                });
            }
        }
        $('.top_search .arrow,.b_blue_box').show();
        
        //20160512Chb Start
		leftnum($(this).index());
		
		/*if ($('.g_run').is(':visible')) {
            $('.top_search .arrow').stop().animate({'left':'420px'});
        } else {
            $('.top_search .arrow').stop().animate({'left':'130px'});
        }*/
		
        //20160512Chb End
        
        event.stopPropagation();
    });

    //游戏服
    $('.g_service').click(function(event){
        var gameid = $('.g_name').attr('gameid');
        var carrierid = $('.g_run').attr('carrierid');
        var groupid = $('.g_area').attr('groupid');
        if (gameid != '') {
            var group = {};
            var carrier = {};
            if (carrierid != '') {
                $.each(gameList.carriers, function(i, item) {
                    if (item.carrierid == carrierid) {
                        carrier = item;
                        return false;
                    }
                });
                $.each(carrier.groups, function(i, item) {
                    if (item.groupid == groupid) {
                        group = item;
                        return false;
                    }
                });
            } else {
                $.each(gameList.groups, function(i, item) {
                    if (item.groupid == groupid) {
                        group = item;
                        return false;
                    }
                });
            }
            $('#letter_server').empty();

            $.each(group.servers, function(i, item) {
                if(gametype==0){
                    $('#letter_server').append(
                        '<dt><a serverid="' + item.serverid
                        + '" onclick="loadGtidByGame(\'' + gameid + '\',\''
                        + item.serverid + '\',\'' + item.servername + '\')">'
                        + item.servername + '</a></dt>');
                }else{
                    $('#letter_server').append(
                        '<dt><a serverid="' + item.serverid
                        + '" onclick="loadGtidByMobileGame(\'' + gameid + '\',\''
                        + item.serverid + '\',\'' + item.servername + '\')">'
                        + item.servername + '</a></dt>');
                }

            });

        }
        $('.top_search .arrow,.b_blue_box').show();
        
      	//20160512Chb Start
		leftnum($(this).index());
		
        /*
        if ($('.g_run').is(':visible')) {
            $('.top_search .arrow').stop().animate({'left':'520px'});
        } else {
            $('.top_search .arrow').stop().animate({'left':'240px'});
        }*/
       
       	//20160512Chb End
       
        event.stopPropagation();
    });



    $(".box_title a").click(function(event){
        $(".top_search .arrow,.b_blue_box").hide();
        event.stopPropagation();
    });
    $(".close_btn").click(function(){
        $(".top_search .arrow,.b_blue_box").hide();
    });
    $(document).click(function(e){
        if(e.which == 1);
        $(".top_search .arrow,.b_blue_box").hide();
    });

    //.g_area,.g_service,.g_type,.g_gameplatform,
    $(".b_blue_box").bind("click",function(event){
        $(".top_search .arrow,.b_blue_box").show();
        event.stopPropagation();
    });

    var crrCheckText = '1';



    //网络游戏/手机游戏
    $(".main_name_select a").click(function(){
        if($(this).html()=='手机游戏'){
            $(".main_letter_select").show();
            gametype='1';
            //mobilegametype = '0';
            loadGameDateNew('热门游戏',gametype, mobilegametype);
            $('#hotgame').trigger('click');
        }else if($(this).html()=='苹果手游'){
            $(".main_letter_select").show();
            gametype='1';
            mobilegametype = '0';
            loadGameDateNew('热门游戏',gametype, mobilegametype);
            $('#hotgame').trigger('click');
        }else if($(this).html()=='安卓手游'){
            $(".main_letter_select").show();
            gametype='1';
            mobilegametype = '1';
            loadGameDateNew('热门游戏',gametype, mobilegametype);
            $('#hotgame').trigger('click');
        }
        else if($(this).html()=='苹果阅读'){
            $(".main_letter_select").hide();
            $("#letter_game").empty();
            var yuedu = '<dt><a href="/goods-buying-A1533-0-0-100140.html">掌阅iReader</a></dt><dt><a href="/goods-buying-A1534-0-0-100140.html">书香云集</a></dt><dt><a href="/goods-buying-A1532-0-0-100140.html">百度阅读</a></dt>';
            $("#letter_game").append(yuedu);
            //gametype='1';
            //mobilegametype = '1';
            ///loadGameDateNew('热门游戏',gametype, mobilegametype);
            //$('#hotgame').trigger('click');
        }
        else{
            $(".main_letter_select").show();
            gametype='0';
            loadGameDateNew('热门游戏',gametype);
            $('#hotgame').trigger('click');
        }
        $(this).addClass("hover").siblings().removeClass("hover");
        //$(".main_con dl").eq($(".main_name_select a").index(this)).show().siblings().hide();
        //$(".main_con ul").show()
    });
    $(".main_letter_select a").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        loadGameDateNew($(this).html(),gametype,mobilegametype);
    });

    if ($('.g_name').attr('gameid')) {
        gameidsed = $('.g_name').attr('gameid');
        $.each(allgames, function(i, item) {
            if (item.gameid == gameidsed) {
                gametype = item.gametype;
                mobilegametype = item.mobilegametype;
                gameinfo = item;
                return false;
            }
        });
        $.ajax({
            url : '/getGameQuFuInfo.action',
            data : {
                gameid : $('.g_name').attr('gameid')
            },
            dataType : 'json',
            success : function(json) {
                if (!json) {
                    return false;
                }
                gameList = json;
                gameListArr.push(gameList);
            }
        });
    }
});

function fastSearchKeyUp(){

    var gametypename = $(".main_name_select").children(".hover").html();
    var gtype = gametypename=='网络游戏'?0:1;
    var mtype = gametypename=='手机游戏'?0:1;
    var _len = allgames.length-1;  //20160613Chb
    if(gametypename=="苹果阅读"){
        return false;
    }
    var txt = $('#sselect_gamename').val();
    if (txt == '') {
        return false;
    }
    txt = txt.toLowerCase().replace(/(.)(?=[^$])/g, "$1,").split(",");
    var _txt = '';
    $.each(txt, function(i, item) {
        if (/[\u4e00-\u9fa5\d]/.test(item)) {
            _txt += Character.getPinyinOfChar(item);
        } else {
            _txt += item;
        }
    });
    $('#hotgame').click();
    $('#letter_game').empty();
    var mobilegameArr=[];
    $.each(allgames, function(i, item) {
        if (Character.testPinyinAbbrByPinyin(getPy(item.gamename), _txt)) {
            var gametype = item.gametype;
            var mobiletype = item.mobilegametype;
            if((gtype==0&&gametype==0)){
                $('#letter_game').append('<dt><a href="javascript:void(0)" gameid='+item.gameid+' onclick="loadCarriersGroupsByGame(\''+item.gameid+'\')" >'+item.gamename+'</a></dt>');
            }else if(gtype==1&&gametype==1){
                if($.inArray(item.gamealias,mobilegameArr)<0){
                    mobilegameArr.push(item.gamealias);
                    $('#letter_game').append('<dt><a href="javascript:void(0)" gameid='+item.gamealias+' onclick="selectMobileGameEvent(\''+item.gamealias+'\')" >'+item.gamealias+'</a></dt>');
                }
            }
        }
        //20160613Chb Start
        if(_len == i){
            if($("#letter_game").children("dt").length==0){
                $("#letter_game").html("<span class=none-game>（没有找到匹配的游戏）</span>");
            };
        }
        //20160613Chb End
    });
    return false;
}

function getPy(word){
    var _pinyin;
    $.each(srcSearchWord, function(i, item) {
        if(item.text == word){
            _pinyin = item.pinyin;
            return false;
        }
    });
    return _pinyin;
}

function fastSearchKeyUp2(){
    var gametypename = $(".main_name_select").children(".hover").html();
    var gtype = gametypename=='网络游戏'?0:1;
    var mtype = gametypename=='苹果手游'?0:1;
    var txt = $('#sselect_servername').val();
    if (txt == '') {
        //return false;
    }
    txt = txt.toLowerCase().replace(/(.)(?=[^$])/g, "$1,").split(",");
    var _txt = '';
    $.each(txt, function(i, item) {
        if (/[\u4e00-\u9fa5\d]/.test(item)) {
            _txt += Character.getPinyinOfChar(item);
        } else {
            _txt += item;
        }
    });
    //$('#hotgame').click();
    //loadGtidByGame(gameid,serverid,servername);
    var group = {};
    var carrier = {};
    var gameid = $('.g_name').attr('gameid');
    var carrierid = $('.g_run').attr('carrierid');
    var groupid = $('.g_area').attr('groupid');

    if (carrierid != '') {
        $.each(gameList.carriers, function(i, item) {
            if (item.carrierid == carrierid) {
                carrier = item;
                return false;
            }
        });
        $.each(carrier.groups, function(i, item) {
            if (item.groupid == groupid) {
                group = item;
                return false;
            }
        });
    } else {
        $.each(gameList.groups, function(i, item) {
            if (item.groupid == groupid) {
                group = item;
                return false;
            }
        });
    }

    $('#letter_server').empty();
    $.each(group.servers,function(i, item) {
        if (_txt == '' || Character.testPinyinAbbrByPinyin(Character.getPinyin2(item.servername).pinyin, _txt)) {
            $('#letter_server').append(
                '<dt><a serverid="' + item.serverid
                + '" onclick="loadGtidByGame(\'' + gameid + '\',\''
                + item.serverid + '\',\'' + item.servername + '\')">'
                + item.servername + '</a></dt>');
        }
    });

    return false;
}


//清空物品类型筛选
function clearSelectGtid(){
    $('.g_type').attr('gtid','');
    $('.g_type').html('物品类型');
}

//清空选择平台
function clearSelectPlatform(){
    var gtName=$(".g_type").html();
    var platform=$(".g_gameplatform").attr("gameplatform");

    setOthersBeforeClearPlatform(gtName,platform);

    $('.g_gameplatform').attr('gameplatform','');
    $('.g_gameplatform').html('平台');
}


function setOthersBeforeClearPlatform(gtName,platform){
    //设置游戏
    $(".g_name").attr("gameid",_gameInfo.shortname);

    //清空运营商、区服
    $(".g_run").attr("carrierid","");
    $(".g_run").html("运营商");
    gameList.carriers=null;
    $('#letter_carrier').empty();
    $(".g_area").attr("groupid","");
    $(".g_area").html("游戏区");
    $('#letter_group').empty();
    $(".g_service").attr("serverid","");
    $(".g_service").html("游戏服务器");
    $('#letter_server').empty();

    //设置物品类型
    setGtidBeforeClearPlatform(gtName,platform);
}

function setGtidBeforeClearPlatform(gtName,platform){
    var gtidMergeValue=getGtidMergeValue(gtName);
    if(gtidMergeValue.indexOf("x")>0){
        $('.g_type').attr('gtid',gtidMergeValue);
    }else{
        $('.g_type').attr('gtid','');
        $('.g_type').html('物品类型');
    }
}

function isGtidInMorePlatform(gtid,platform){
    var res=false;
    $.each(_gameInfo.goosTypeInfo,function(i,item){
        $.each(item.split(","),function(j,item2){
            if(item2.indexOf(gtid)>=0&&_gameInfo.platforms[i]!=platform){
                res=true;
                return false;
            }
        });
    });
    return res;
}

function getGtidMergeValue(gtName){
    var gtidMerge="";
    var gtidArr=[];
    $.each(_gameInfo.goosTypeInfo,function(i,item){
        $.each(item.split(","),function(j,item2){
            if(item2.split(":")[3]==gtName){
                gtidArr.push(item2.split(":")[0]+_gameInfo.platforms[i]);
            }
        });
    });
    gtidMerge=gtidArr.join("x");
    return gtidMerge;
}

//20160512Chb Start
function leftnum(num){
	var _display = $(".selectbox").find("li").eq(2).css("display");
	var flag = num; 										
    var _selectbox_li_width = $(".selectbox").find("li").outerWidth();
    var _width = (_selectbox_li_width*flag)+(_selectbox_li_width/2-5);
	if(_display != "none"){
		$('.top_search .arrow').stop().animate({'left': _width});
	}else{
		if(num>2){
			var flag = num-2; 
			_width = (_selectbox_li_width*flag)+(_selectbox_li_width/2-5);
			console.log(_width);
		}
	    $('.top_search .arrow').stop().animate({'left': _width});
	}
	  			
}
//20160512Chb End

$(".placeholder").find("input").bind('propertychange input', function() { 
	if($(this).val() == ""){
		$(this).parent("label").find("span").show();
	}else{
		$(this).parent("label").find("span").hide();
	}
});
if($(".placeholder").find("input").val() !=""){
	$(".placeholder").find("span").hide();
}
// 兼容IE9
if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
	$(".placeholder").each(function(index){
		var myInput = document.getElementsByClassName("placeholder")[index].childNodes[0], 
	    	lastValue = myInput.value;
		var onInput = function() {
		    if(lastValue !== myInput.value){
		    	lastValue = myInput.value;
		    	if(lastValue == ""){
		    		$(".placeholder").eq(index).find("span").show();
				}else{
					$(".placeholder").eq(index).find("span").hide();
				}
		    }
	  	};
	  	var onFocusChange = function(event) {
		    if(event.type === "focus") {
		    	document.addEventListener("selectionchange", onInput, false);
		    }else{
		    	document.removeEventListener("selectionchange", onInput, false);
		    }
	  	};
	  	myInput.addEventListener("input", onInput,false);
	  	myInput.addEventListener("focus", onFocusChange,false);
	  	myInput.addEventListener("blur", onFocusChange,false);
	});
};