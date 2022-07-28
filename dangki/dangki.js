function Register(e){
    event.preventDefault()
    
    var dname=document.getElementById('dname').value
    var dkhau=document.getElementById('dkhau').value
    var ddate=document.getElementById('ddate').value
    var dmail=document.getElementById('dmail').value
    var dangki={
      dname:dname,
      dmail:dmail,
      ddate:ddate,
      dkhau:dkhau,
    }
    var json=JSON.stringify(dangki)
    localStorage.setItem('ds',json)
  
    
    alert("Đăng kí thành công")
    window.location.href="/html/game/dangnhap/dangnhap.html"
    document.getElementById('dname').value=''
    document.getElementById('dmail').value=''
    document.getElementById('ddate').value=''
    document.getElementById('dkhau').value=''
    }