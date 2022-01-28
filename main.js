 $(document).ready(function(){
        $.getJSON("produits.json", function(data){
         var tab = '';
         
         $.each(data
            , function(key, value){
             tab +=  '<tr>';
             tab +=  '<td>'+value.id+'</td>';
             tab +=  '<td>'+value.designation+'</td>';
             tab +=  '<td>'+value.prix+'</td>';
             tab +=  '<td>'+value.catégorie+'</td>';
             tab +=  '<td>'+value.disponibilite+'</td>';
             tab +=  '<td>'+"RaisonSocial: "+value.fournisseur.raisonSocial+'<br>'+"Adress: "+value.fournisseur.adress+'</td>';
             tab +=  '</tr>';
         });
         $('#tablee').append(tab);
        });
    });

    $(document).ready(function(){
        $("#search").on("keyup",function(){
    var value = $(this).val().toLowerCase();

        $("#tBody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1  )
        });
        
       } );

    });



    $('th').click(function(){
      var table = $(this).parents('table').eq(0)
      var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
      this.asc = !this.asc
      if (!this.asc){rows = rows.reverse()}
      for (var i = 0; i < rows.length; i++){table.append(rows[i])}
  })

  
  function comparer(index) {
      return function(a, b) {
          var valA = getCellValue(a, index), valB = getCellValue(b, index)
          return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
      }
  }
  function getCellValue(row, index){ return $(row).children('td').eq(index).text() }