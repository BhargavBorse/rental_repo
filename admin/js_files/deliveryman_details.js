var tableRef = document.getElementById('dmd_table').getElementsByTagName('tbody')[0];

firebase.database().ref().child('Delivery_Man_Details').on('child_added',function(dmd_snapshot){
    
    var dmd_name = dmd_snapshot.child('Name').val();
    var dmd_address = dmd_snapshot.child('address').val();
    var dmd_email = dmd_snapshot.child('Email').val();
    var dmd_mobile = dmd_snapshot.child('mobile_number').val();
    var id_proof_img = dmd_snapshot.child('id_proof').val();
    
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(0);
    
    //Cells
    var dm_name_cell = newRow.insertCell(0);
    var dm_address_cell = newRow.insertCell(1);
    var dm_email_cell = newRow.insertCell(2);
    var dm_mobile_cell = newRow.insertCell(3);
    var id_image_cell = newRow.insertCell(4);

    // var a_image_link = document.createElement('a');
    // a_image_link.setAttribute('href','#');
    
    // var product_image = document.createElement('img');
    
    
    var a = document.createElement('a');
    a.setAttribute('href',id_proof_img);
    a.className ='example-image-link';
    a.setAttribute('data-lightbox','example-set');
     
    var img = document.createElement('img');
    img.className = 'example-image';
    img.setAttribute('src',id_proof_img);
    img.setAttribute('height','5%');

    a.appendChild(img);
    
    // var create_div = document.createElement('div');
// product_image.setAttribute('style','')
    // product_image.className = ''



    // product_image.className = 'img-responsive';
    // product_image.setAttribute('src', id_proof_img);
    // a_image_link.appendChild(product_image);

    // id_image_cell.appendChild(a_image_link);
    id_image_cell.appendChild(a);

    //CellValue
    var dm_name_cell_value = document.createTextNode(dmd_name);
    var dm_address_cell_value = document.createTextNode(dmd_address);
    var dm_email_cell_value = document.createTextNode(dmd_email);
    var dm_mobile_cell_value = document.createTextNode(dmd_mobile);
    
    
    dm_name_cell.appendChild(dm_name_cell_value);
    dm_address_cell.appendChild(dm_address_cell_value);
    dm_email_cell.appendChild(dm_email_cell_value);
    dm_mobile_cell.appendChild(dm_mobile_cell_value);
    var img = document.getElementById('loading_gif');
img.style.visibility = 'hidden';
});