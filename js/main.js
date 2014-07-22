  function validatxt(e){
     key = e.keyCode || e.which;
     tecla = String.fromCharCode(key).toLowerCase();
     letras = " ÃƒÆ’Ã‚Â¡ÃƒÆ’Ã‚Â©ÃƒÆ’Ã‚Â­ÃƒÆ’Ã‚Â³ÃƒÆ’Ã‚ÂºáabcdéefghíijklmnÃƒÆ’Ã‚Â±óopqrstúuvwxyz";
     especiales = [8,37,39,46];

     tecla_especial = false
     for(var i in especiales){
          if(key == especiales[i]){
              tecla_especial = true;
              break;
          }
      }

      if(letras.indexOf(tecla)==-1 && !tecla_especial){
          return false;
      }
  }

  function validanum(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      if (tecla==8) return true;
      patron =/\d/;
      te = String.fromCharCode(tecla);
      return patron.test(te);
  }


  function letrasRut(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      if (tecla==8 || tecla==107) return true;
      patron =/\d/;
      te = String.fromCharCode(tecla);
      return patron.test(te);
  }

  /////////// validador Rut ////////////////

  function Valida_Rut( Objeto )
  {
    var tmpstr = "";
    var intlargo = Objeto.value
    if (intlargo.length> 0)
    {
      crut = Objeto.value
      largo = crut.length;
      if ( largo <2 )
      {
        //alert('rut inválido')
        $(Objeto).addClass("error");
        Objeto.focus()
        return false;
      }
      for ( i=0; i <crut.length ; i++ )
      if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
      {
        tmpstr = tmpstr + crut.charAt(i);
      }
      rut = tmpstr;
      crut=tmpstr;
      largo = crut.length;
    
      if ( largo> 2 )
        rut = crut.substring(0, largo - 1);
      else
        rut = crut.charAt(0);
    
      dv = crut.charAt(largo-1);
    
      if ( rut == null || dv == null )
      return 0;
    
      var dvr = '0';
      suma = 0;
      mul  = 2;
    
      for (i= rut.length-1 ; i>= 0; i--)
      {
        suma = suma + rut.charAt(i) * mul;
        if (mul == 7)
          mul = 2;
        else
          mul++;
      }
    
      res = suma % 11;
      if (res==1)
        dvr = 'k';
      else if (res==0)
        dvr = '0';
      else
      {
        dvi = 11-res;
        dvr = dvi + "";
      }
    
      if ( dvr != dv.toLowerCase() )
      {
		$(Objeto).addClass("error");
        //Objeto.classList.add("error") la funcion classList no funciona en IE9 IE8 http://caniuse.com/classlist
        return false;
      }
	  $(Objeto).removeClass("error");
      //Objeto.classList.remove("error"); 
      return true;
    }
  }