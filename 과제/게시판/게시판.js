
  document.addEventListener("DOMContentLoaded",()=>{
    //날짜 표시
    const wDate = document.querySelector("#wDate");
    let date = new Date();
    let today = date.toDateString();
    wDate.innerText = today;


   let ct=0;
   let ct2=0;
   let arr=[];
    //글쓰기 돔
   let wTitle=document.querySelector("#wTitle");
   let wName=document.querySelector("#wName");
   let wText=document.querySelector("#wText");
   const wAddBtn=document.querySelector("#wAddBtn");

    let localarr = localStorage.getItem("arr"); //로컬데이터가져오기
    let jsonarr = JSON.parse(localarr); //JSON변환 배열
   
   
   wAddBtn.addEventListener("click",()=>{

    
    let obj={};
    let wTitleV =wTitle.value;
    let wNameV =wName.value;
    let wTextV =wText.value;

    //value 저장
    obj.글번호=++ct;
    obj.제목=wTitleV;
    obj.작성자=wNameV;
    obj.조회수=ct2;
    obj.작성일자=today;
    obj.내용=wTextV;

    if(jsonarr){
    jsonarr.push(obj)
    localStorage.setItem("arr",JSON.stringify(arr))

    
    }else{
      arr.push(obj);
      localStorage.setItem("arr",JSON.stringify(arr))
    }
   });
   
   wTitleV="";
    wTitle="";
    wName="";
    wNameV="";
    wTextV="";
    wText="";
  })

    