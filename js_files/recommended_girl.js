var dbRef_men = firebase.database().ref();
var itemRef_men = firebase.database().ref('item');
dbRef_men.child('item').child('Girls').on('value',function(item_details_snapshot){
    var item_details = item_details_snapshot.val();
    var girl_keys = Object.keys(item_details);
    for(var i=0;i<girl_keys.length;i++)
    {
        itemRef_men.child('Girls').child(girl_keys[i]).on('value',function(item_details_girls_snapshot){
            var item_deep_details = item_details_girls_snapshot.val();
            
            if(item_deep_details.recommended == true){
                //Div class=owl-item
                var div_sub0 = document.createElement('div');
                div_sub0.className="owl-item";
                div_sub0.setAttribute('style','width: auto; padding:5px; ');
                
                // //Appending div-class=owl-item to div-class=owl-stage
                document.getElementById('owl-demo2').appendChild(div_sub0);
                
                
                //Sub-div (class=item)
                var div_sub1 = document.createElement('div');
                div_sub1.className = "item";
                
                //Appending div_sub1 to the div_sub0
                div_sub0.appendChild(div_sub1);
                
                //Sub-Sub-Div (class=card product-men p-3)
                var div_sub2 = document.createElement('div');
                div_sub2.className="card product-men p-3";
                
                
                //Append class=card product-men p-3 to class=item
                div_sub1.appendChild(div_sub2);
                
                //Sub-Sub-Sub-Div (class=men-thumb-item)
                var div_sub3 = document.createElement('div');
                div_sub3.className="men-thumb-item";
                
                //Append class=men-thumb-item to class=card product-men p-3
                div_sub2.appendChild(div_sub3);
                
                //Img under div-class=men-thumb-item
                var img1 = document.createElement('img');
                img1.className="card-img-top card-img-top-height card-item-img-top";
                img1.setAttribute('src',item_deep_details.optional_image);
                // var img122 = document.createTextNode(girl_keys[i]);
                
                //Append img-class=card-img-top card-img-top-height to div-class=men-thumb-item
                div_sub3.appendChild(img1);
                
                //Sub-Sub-Sub-Sub-Div (class=men-cart-pro)
                var div_sub4 = document.createElement('div');
                div_sub4.className="men-cart-pro";
                
                //Append class=men-cart-pro to class=men-thumb-item
                div_sub3.appendChild(div_sub4);
                
                //Sub-Sub-Sub-Sub-Sub-Div (class=inner-men-cart-pro)
                var div_sub5 = document.createElement('div');
                div_sub5.className="inner-men-cart-pro";
                
                //Append class=inner-men-cart-pro to men-cart-pro
                div_sub4.appendChild(div_sub5);
                
                //A Link under div-class=inner-men-cart-pro
                var a1 = document.createElement('a');
                a1.setAttribute('href','#');
                a1.className="link-product-add-cart";
                var a1_text = document.createTextNode('Quick View');
                a1.appendChild(a1_text);
                
                //Append a-class=link-product-add-cart to class=inner-men-cart-pro
                div_sub5.appendChild(a1);
                
                ////////////CARD - BODY////////////
                
                //Sub-Sub2-Sub2-Div (class=card-body  py-3 px-2)
                var div_sub_sub1 = document.createElement('div');
                div_sub_sub1.className="card-body  py-3 px-2";
                
                //Append class=card-body py-3 px-2 to class=card product-men p-3
                div_sub2.appendChild(div_sub_sub1);
                
                //H5 under div-class=card-body py-3 px-2
                var h5_1 = document.createElement('h5');
                h5_1.className="card-title text-capitalize";
                var h5_1_text = document.createTextNode(item_deep_details.item_name);
                h5_1.appendChild(h5_1_text);
                
                //Append h5 to div-class=card-body py-3 px-2
                div_sub_sub1.appendChild(h5_1);
                
                //Sub-Sub-Sub2-Sub-Div (class=card-text d-flex justify-content-between)
                var div_sub_sub2 = document.createElement('div');
                div_sub_sub2.className="card-text d-flex justify-content-between";
                
                //Append class=card-text d-flex justify-content-between to class=card-body py-3 px-2
                div_sub_sub1.appendChild(div_sub_sub2);
                
                //P under div-class=card-text d-flex justify-content-between
                var p1 = document.createElement('p');
                p1.className="text-dark font-weight-bold";
                var p1_text = document.createTextNode(item_deep_details.item_price);
                p1.appendChild(p1_text);
                // p1.appendChild(img122);
                // div_sub_sub2.appendChild(img122);
                //Append p to div-class=card-text d-flex justify-content-between
                div_sub_sub2.appendChild(p1);
                
                //////////////CARD - FOOTER//////////
                
                //Sub-Sub-Sub3
                var div_sub_sub2 = document.createElement('div');
                div_sub_sub2.className="card-footer d-flex justify-content-end";
                
                //Append class=card-footer d-flex justify-content-end to class=card product-men p-3
                div_sub2.appendChild(div_sub_sub2);
                
                
                // creating input:hidden for redirecting to another page with image details and cart button
                var input_image_details = document.createElement('input');
                input_image_details.setAttribute('type', 'hidden');
                input_image_details.setAttribute('value',girl_keys[i]);
                
                // creating a link 
                var alink = document.createElement('a');
                alink.setAttribute('href', 'checkout.html?item=' + girl_keys[i] + '&category=Girls');
                
                //Button under div-class=card-footer d-flex justify-content-end
                var btn1 = document.createElement('button');
                btn1.setAttribute('type','button');
                // btn1.setAttribute('id', 'insert_to_cart' + i);
                // btn1.setAttribute('onclick', 'insert_to_cart()');
                btn1.className="hub-cart phub-cart btn";
                // btn1.appendChild(img122);
                
                
                div_sub_sub2.appendChild(alink);
                alink.appendChild(btn1);
                
                //Append button to div-class=card-footer d-flex justify-content-end
                // div_sub_sub2.appendChild(btn1);
                
                //I under Button-class=hub-cart phub-cart btn
                var i1 = document.createElement('i');
                i1.className="fa fa-cart-plus";
                i1.setAttribute('aria-hidden','true');
                
                //Append I to Button-class=hub-cart phub-cart btn
                btn1.appendChild(i1);
            }
        });
    }
});