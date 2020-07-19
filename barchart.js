//put variable into string
function cleanStringFormatResult(txt) {
  if (txt == null) return "";
  return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
}
function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}
String.prototype.format = function() {
  var txt = this.toString();
  for (var i = 0; i < arguments.length; i++) {
    var exp = getStringFormatPlaceHolderRegEx(i);
    arguments[i] = String(arguments[i]).replace(/\$/gm,'♒☯◈∭')
    txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
    txt = txt.replace(/♒☯◈∭/gm,'$')
  }
  return cleanStringFormatResult(txt);
}
/*
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/


var page = 1
var swell = window.data['swell_1']
var temp = window.data['temp_1']
if (swell== true){
  console.log('data is here.');
}

var today = new Date()
dateFormat = {month:'short', day:'2-digit',weekday:'short'}
todayF = today.toLocaleDateString("ch-CN", dateFormat)
console.log(todayF)

//畫面一開始
window.onload  = function loadChart() {
  $('#left-btn').css('visibility','hidden')
  var chart = new CanvasJS.Chart("chartContainer", {
    width:400, 
    height:500,
    animationEnabled: true,
    exportEnabled: false,
    fontFamily: "Calibri",
    fontWeight: "bold",
    title:{
      text: todayF,
      fontFamily: 'sans-serif',
      fontWeight: "bold",
      fontColor: '#F39C19',
      padding: 20,
    },
    toolTip:{
      shared: true,
    },
    axisX:[{
      title:'hours',
      suffix: "h",
      titleFontSize:20
    }],
    axisY:[{
      title:'size (m)',
      suffix: "m",
      maximum:4.0,
      titleFontSize:20
    }],
    axisY2:[{
      title: 'temperature(\u2103)',
      suffix: "\u2103",
			maximum:40,
      labelFontColor: "#b30000",
      titleFontColor: "#b30000",
      titleFontSize:20
    }],
    data: [{
      type: "column",
      name:'Swell',
      toolTipContent:"Time: {x}:00<br/><hr/><span style='\"'color: #33AFFF;'\"'>{name}</span>: {y}m",
      YvalueFormatString:'#.#m',
      showInLegend: true,
      colorSet:'colorSet1',
      dataPoints:swell
    },
    {
      type:"line",
      name:'Temperature',
      toolTipContent:"<span style='\"'color: #ff1a1a;'\"'>{name}</span>: {y}\u2103",
      YvalueFormatString:'#\u2103',
      showInLegend: true,
      axisYType: "secondary",
      color:'#b30000',
      indexLabelPlacement: "outside",
      dataPoints: temp
    }]
   });
  chart.render();
}   

document.addEventListener('DOMContentLoaded', function() {
  var leftbtn = document.getElementById('left-btn');
  // onClick's logic below:
  leftbtn.addEventListener('click', function() {
    page=page-1
    if(page<=1){$('#left-btn').css('visibility','hidden')}
    if(page<7){$('#right-btn').css('visibility','visible')}
    console.log(page)
    swell = data['swell_{0}'.format(page)]
    temp = data['temp_{0}'.format(page)]
    var selectDate = new Date(today)
    selectDate.setDate(selectDate.getDate() + page-1)
    selectDate = selectDate.toLocaleDateString("ch-CN", dateFormat)
    console.log(selectDate)
    var selectColor = (page === 1) ? ('#F39C19') : ('#3A3A3A')

    function loadChart(){
      var chart = new CanvasJS.Chart("chartContainer", {
      width:400, 
      height:500,
      animationEnabled: true,
      exportEnabled: false,
      fontFamily: "Calibri",
      fontWeight: "bold",
      title:{
        text: selectDate,
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        fontColor: selectColor,
        padding: 20,
      },
      toolTip:{
        shared: true,
        
      },
      axisX:[{
        title:'hours',
        suffix: "h",
        titleFontSize:20
      }],
      axisY:[{
        title:'size (m)',
        suffix: "m",
        maximum:4.0,
        titleFontSize:20
      }],
      axisY2:[{
        title: 'temperature(\u2103)',
        suffix: "\u2103",
        maximum:40,
        labelFontColor: "#b30000",
        titleFontColor: "#b30000",
        titleFontSize:20
      }],
      data: [{
        type: "column",
        name:'Swell',
        toolTipContent:"Time: {x}:00<br/><hr/><span style='\"'color: #33AFFF;'\"'>{name}</span>: {y}m",
        YvalueFormatString:'#.#m',
        showInLegend: true,
        colorSet:'colorSet1',
        dataPoints:swell,
      },
      {
        type:"line",
        name:'Temperature',
        toolTipContent:"<span style='\"'color: #ff1a1a;'\"'>{name}</span>: {y}\u2103",
        YvalueFormatString:'#\u2103',
        showInLegend: true,
        axisYType: "secondary",
        color:'#b30000',
        indexLabelPlacement: "outside",
        dataPoints: temp
      }]
    });
    chart.render();
    };
    loadChart();
    });
}) 

document.addEventListener('DOMContentLoaded', function() {
  var rightbtn = document.getElementById('right-btn');
  // onClick's logic below:
  rightbtn.addEventListener('click', function() {
    page=page+1
    if(page>1){$('#left-btn').css('visibility','visible')}
    if(page>=7){$('#right-btn').css('visibility','hidden')}
    //console.log(page)
    swell = data['swell_{0}'.format(page)]
    temp = data['temp_{0}'.format(page)]
    var selectDate = new Date(today)
    selectDate.setDate(selectDate.getDate() + page-1)
    selectDate = selectDate.toLocaleDateString("ch-CN", dateFormat)
    //console.log(selectDate)
    var selectColor = (page === 1) ? ('#F39C19') : ('#3A3A3A')
  
    function loadChart(){
      var chart = new CanvasJS.Chart("chartContainer", {
        width:400, 
        height:500,
        animationEnabled: true,
        exportEnabled: false,
        fontFamily: "Calibri",
        fontWeight: "bold",
        title:{
          text: selectDate,
          fontFamily: 'sans-serif',
          fontWeight: "bold",
          fontColor: selectColor,
          padding: 20,
        },
        toolTip:{
          shared: true,
          
        },
        axisX:[{
          title:'hours',
          suffix: "h",
          titleFontSize:20
        }],
        axisY:[{
          title:'size (m)',
          suffix: "m",
          maximum:4.0,
          titleFontSize:20
        }],
        axisY2:[{
          title: 'temperature(\u2103)',
          suffix: "\u2103",
          maximum:40,
          labelFontColor: "#b30000",
          titleFontColor: "#b30000",
          titleFontSize:20
        }],
        data: [
          {type: "column",
          name:'Swell',
          toolTipContent:"Time: {x}:00<br/><hr/><span style='\"'color: #33AFFF;'\"'>{name}</span>: {y}m",
          YvalueFormatString:'#.#m',
          showInLegend: true,
          colorSet:'colorSet1',
          dataPoints:swell,},
          {type:"line",
          name:'Temperature',
          toolTipContent:"<span style='\"'color: #ff1a1a;'\"'>{name}</span>: {y}\u2103",
          YvalueFormatString:'#\u2103',
          showInLegend: true,
          axisYType: "secondary",
          color:'#b30000',
          indexLabelPlacement: "outside",
          dataPoints: temp}
        ]
      });
      chart.render();
      };
      loadChart();
      });
}) 
