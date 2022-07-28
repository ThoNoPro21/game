function Login(){
    event.preventDefault()
    var ddname=document.getElementById('ddname').value
    var ddkhau=document.getElementById('ddkhau').value
    var dangki=localStorage.getItem('ds')
    var data=JSON.parse(dangki)
 
    if(ddname===data.dname&&ddkhau===data.dkhau)
    {
    alert("Đăng nhập thành công")
    window.location.href="/html/game/game.html"
    document.getElementById('ddname').value=''
    document.getElementById('ddkhau').value=''
    return true
    }
    alert("Sai tài khoản hoặc mật khẩu")
    return false
 /*  }
  function dangxuat(){
    document.getElementById('show_TTnhap').innerHTML=null
  }
  function nut_TT(){
  if(document.getElementById("TTnhap").style.display==='flex'){
    document.getElementById("TTnhap").style.display='none'
  }
  else{
  document.getElementById("TTnhap").style.display='flex'
  } */
  }