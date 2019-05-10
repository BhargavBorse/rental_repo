var dbRef = firebase.database().ref();
var itemRef = firebase.database().ref('item');

var url_string = window.location.href;
var url = new URL (url_string);
var recommended = url.searchParams.get('recommended');
var category = url.searchParams.get('category');
var item_id = url.searchParams.get('id');

if(category == 'women')
{
    dbRef.child('item').child('Women').on('value',function(item_details_snapshot)
    {
        var item_details = item_details_snapshot.val();
        var women_keys = Object.keys(item_details);
        
        for(var i = 0; i<women_keys[i].length; i++)
        {
            itemRef.child('Women').child(women_keys[i]).on('value',function(item_deep_details_snapshot){
                var item_deep_details = item_deep_details_snapshot.val();
                
                if(women_keys[i] == item_id)
                {
                    // alert(item_deep_details.optional_image);
                    // document.getElementById('main')[0].
                    var ul_slides = document.createElement('ul');
                    ul_slides.className = "slides";
                    
                    document.getElementsByClassName('flexslider1')[0].appendChild(ul_slides);
                    
                    var li_data_thumb = document.createElement('li');
                    li_data_thumb.setAttribute('data-thumb', item_deep_details.optional_image);
                    ul_slides.appendChild(li_data_thumb);
                    
                    var div_thumb_image = document.createElement('div');
                    div_thumb_image.className = "thumb-image";
                    li_data_thumb.appendChild(div_thumb_image);
                    
                    var img = document.createElement('img');
                    img.className = "img-fluid";
                    img.setAttribute('src', item_deep_details.optional_image);
                    img.setAttribute('data-imagezoom', 'true');
                    img.setAttribute('style', 'height: 500px !important; width: 100% !important;');
                    div_thumb_image.appendChild(img); 
                    
                    document.getElementById('description').innerHTML = item_deep_details.item_description;
                    document.getElementById('item_name').innerHTML = item_deep_details.item_name;
                    document.getElementById('price').innerHTML = item_deep_details.item_price;
                    
                    var single_item = document.createElement('div');
                    single_item.className = "chr single-item single_page_b";
                    document.getElementsByClassName('occasion-cart')[0].appendChild(single_item);
                    
                    var alink = document.createElement('a');
                    alink.setAttribute('href', 'checkout.html?item=' + women_keys[i] + '&category=women');
                    
                    var btn1 = document.createElement('button');
                    btn1.setAttribute('type','button');
                    btn1.className="hub-cart btn fa fa-cart-plus";
                    btn1.setAttribute('aria-hidden', 'true');                    
                    single_item.appendChild(alink);
                    alink.appendChild(btn1);
                    
                }
            });
        }
    });
}


else if(category == 'men')
{
    dbRef.child('item').child('Men').on('value',function(item_details_snapshot)
    {
        var item_details = item_details_snapshot.val();
        var men_keys = Object.keys(item_details);
        
        for(var i = 0; i<men_keys[i].length; i++)
        {
            itemRef.child('Men').child(men_keys[i]).on('value',function(item_deep_details_snapshot){
                var item_deep_details = item_deep_details_snapshot.val();
                
                if(men_keys[i] == item_id)
                {
                    // alert(item_deep_details.optional_image);
                    // document.getElementById('main')[0].
                    var ul_slides = document.createElement('ul');
                    ul_slides.className = "slides";
                    
                    document.getElementsByClassName('flexslider1')[0].appendChild(ul_slides);
                    
                    var li_data_thumb = document.createElement('li');
                    li_data_thumb.setAttribute('data-thumb', item_deep_details.optional_image);
                    ul_slides.appendChild(li_data_thumb);
                    
                    var div_thumb_image = document.createElement('div');
                    div_thumb_image.className = "thumb-image";
                    li_data_thumb.appendChild(div_thumb_image);
                    
                    var img = document.createElement('img');
                    img.className = "img-fluid";
                    img.setAttribute('src', item_deep_details.optional_image);
                    img.setAttribute('data-imagezoom', 'true');
                    img.setAttribute('style', 'height: 500px !important; width: 100% !important;');
                    div_thumb_image.appendChild(img); 
                    
                    document.getElementById('description').innerHTML = item_deep_details.item_description;
                    document.getElementById('item_name').innerHTML = item_deep_details.item_name;
                    document.getElementById('price').innerHTML = item_deep_details.item_price;
                    
                    var single_item = document.createElement('div');
                    single_item.className = "chr single-item single_page_b";
                    document.getElementsByClassName('occasion-cart')[0].appendChild(single_item);
                    
                    var alink = document.createElement('a');
                    alink.setAttribute('href', 'checkout.html?item=' + men_keys[i] + '&category=men');
                    
                    var btn1 = document.createElement('button');
                    btn1.setAttribute('type','button');
                    btn1.className="hub-cart btn fa fa-cart-plus";
                    btn1.setAttribute('aria-hidden', 'true');                    
                    single_item.appendChild(alink);
                    alink.appendChild(btn1);
                    
                }
            });
        }
    });
}


else if(category=='girl')
{
    dbRef.child('item').child('Girls').on('value',function(item_details_snapshot)
    {
        var item_details = item_details_snapshot.val();
        var girl_keys = Object.keys(item_details);
        
        for(var i = 0; i<girl_keys[i].length; i++)
        {
            itemRef.child('Girls').child(girl_keys[i]).on('value',function(item_deep_details_snapshot){
                var item_deep_details = item_deep_details_snapshot.val();
                
                if(girl_keys[i] == item_id)
                {
                    // alert(item_deep_details.optional_image);
                    // document.getElementById('main')[0].
                    var ul_slides = document.createElement('ul');
                    ul_slides.className = "slides";
                    
                    document.getElementsByClassName('flexslider1')[0].appendChild(ul_slides);
                    
                    var li_data_thumb = document.createElement('li');
                    li_data_thumb.setAttribute('data-thumb', item_deep_details.optional_image);
                    ul_slides.appendChild(li_data_thumb);
                    
                    var div_thumb_image = document.createElement('div');
                    div_thumb_image.className = "thumb-image";
                    li_data_thumb.appendChild(div_thumb_image);
                    
                    var img = document.createElement('img');
                    img.className = "img-fluid";
                    img.setAttribute('src', item_deep_details.optional_image);
                    img.setAttribute('data-imagezoom', 'true');
                    img.setAttribute('style', 'height: 500px !important; width: 100% !important;');
                    div_thumb_image.appendChild(img); 
                    
                    document.getElementById('description').innerHTML = item_deep_details.item_description;
                    document.getElementById('item_name').innerHTML = item_deep_details.item_name;
                    document.getElementById('price').innerHTML = item_deep_details.item_price;
                    
                    var single_item = document.createElement('div');
                    single_item.className = "chr single-item single_page_b";
                    document.getElementsByClassName('occasion-cart')[0].appendChild(single_item);
                    
                    var alink = document.createElement('a');
                    alink.setAttribute('href', 'checkout.html?item=' + girl_keys[i] + '&category=Girls');
                    
                    var btn1 = document.createElement('button');
                    btn1.setAttribute('type','button');
                    btn1.className="hub-cart btn fa fa-cart-plus";
                    btn1.setAttribute('aria-hidden', 'true');                    
                    single_item.appendChild(alink);
                    alink.appendChild(btn1);
                    
                }
            });
        }
    });
}


else if(category == 'boy')
{
    dbRef.child('item').child('Boy').on('value',function(item_details_snapshot)
    {
        var item_details = item_details_snapshot.val();
        var boy_keys = Object.keys(item_details);
        
        for(var i = 0; i<boy_keys[i].length; i++)
        {
            itemRef.child('Boy').child(boy_keys[i]).on('value',function(item_deep_details_snapshot){
                var item_deep_details = item_deep_details_snapshot.val();
                
                if(boy_keys[i] == item_id)
                {
                    // alert(item_deep_details.optional_image);
                    // document.getElementById('main')[0].
                    var ul_slides = document.createElement('ul');
                    ul_slides.className = "slides";
                    
                    document.getElementsByClassName('flexslider1')[0].appendChild(ul_slides);
                    
                    var li_data_thumb = document.createElement('li');
                    li_data_thumb.setAttribute('data-thumb', item_deep_details.optional_image);
                    ul_slides.appendChild(li_data_thumb);
                    
                    var div_thumb_image = document.createElement('div');
                    div_thumb_image.className = "thumb-image";
                    li_data_thumb.appendChild(div_thumb_image);
                    
                    var img = document.createElement('img');
                    img.className = "img-fluid";
                    img.setAttribute('src', item_deep_details.optional_image);
                    img.setAttribute('data-imagezoom', 'true');
                    img.setAttribute('style', 'height: 500px !important; width: 100% !important;');
                    div_thumb_image.appendChild(img); 
                    
                    document.getElementById('description').innerHTML = item_deep_details.item_description;
                    document.getElementById('item_name').innerHTML = item_deep_details.item_name;
                    document.getElementById('price').innerHTML = item_deep_details.item_price;
                    
                    var single_item = document.createElement('div');
                    single_item.className = "chr single-item single_page_b";
                    document.getElementsByClassName('occasion-cart')[0].appendChild(single_item);
                    
                    var alink = document.createElement('a');
                    alink.setAttribute('href', 'checkout.html?item=' + boy_keys[i] + '&category=boy');
                    
                    var btn1 = document.createElement('button');
                    btn1.setAttribute('type','button');
                    btn1.className="hub-cart btn fa fa-cart-plus";
                    btn1.setAttribute('aria-hidden', 'true');                    
                    single_item.appendChild(alink);
                    alink.appendChild(btn1);
                    
                }
            });
        }
    });
}


if(category == 'dod')
{
    firebase.database().ref().child('dod').on('value',function(item_details_snapshot)
    {
        var item_details = item_details_snapshot.val();
        var dod_keys = Object.keys(item_details);
        
        for(var i = 0; i<dod_keys[i].length; i++)
        {
            firebase.database().ref().child('dod').child(dod_keys[i]).on('value',function(item_deep_details_snapshot){
                var item_deep_details = item_deep_details_snapshot.val();
                
                if(dod_keys[i] == item_id)
                {
                    // alert(item_deep_details.optional_image);
                    // document.getElementById('main')[0].
                    var ul_slides = document.createElement('ul');
                    ul_slides.className = "slides";
                    
                    document.getElementsByClassName('flexslider1')[0].appendChild(ul_slides);
                    
                    var li_data_thumb = document.createElement('li');
                    li_data_thumb.setAttribute('data-thumb', item_deep_details.optional_image);
                    ul_slides.appendChild(li_data_thumb);
                    
                    var div_thumb_image = document.createElement('div');
                    div_thumb_image.className = "thumb-image";
                    li_data_thumb.appendChild(div_thumb_image);
                    
                    var img = document.createElement('img');
                    img.className = "img-fluid";
                    img.setAttribute('src', item_deep_details.optional_image);
                    img.setAttribute('data-imagezoom', 'true');
                    img.setAttribute('style', 'height: 500px !important; width: 100% !important;');
                    div_thumb_image.appendChild(img); 
                    
                    document.getElementById('description').innerHTML = item_deep_details.item_description;
                    document.getElementById('item_name').innerHTML = item_deep_details.item_name;
                    document.getElementById('price').innerHTML = item_deep_details.item_price;
                    
                    var single_item = document.createElement('div');
                    single_item.className = "chr single-item single_page_b";
                    document.getElementsByClassName('occasion-cart')[0].appendChild(single_item);
                    
                    var alink = document.createElement('a');
                    alink.setAttribute('href', 'checkout.html?item=' + dod_keys[i] + '&category=dod');
                    
                    var btn1 = document.createElement('button');
                    btn1.setAttribute('type','button');
                    btn1.className="hub-cart btn fa fa-cart-plus";
                    btn1.setAttribute('aria-hidden', 'true');                    
                    single_item.appendChild(alink);
                    alink.appendChild(btn1);
                    
                }
            });
        }
    });
}