// $(function(){
//   var dropzone = $('.dropzone-area');
//   var dropzone2 = $('.dropzone-area2');
//   var dropzone_box = $('.dropzone_box');
//   var images = [];
//   var inputs  =[];
//   var input_area = $('.input_area');
//   var preview = $('#preview');
//   var preview2 = $('#preview2');

//   $(document).on('change', 'input[type= "file"].upload-image',function(event) {
//     var file = $(this).prop('files')[0];
//     var reader = new FileReader();
//     inputs.push($(this));
//     var img = $(`<div class= "img_view"><img class= "img_view__inner"></div>`);
//     reader.onload = function(e) {
//       var btn_wrapper = $('<div class="btn_wrapper"><div class="btn_edit_image btn edit">編集</div><div class="btn_delete_image btn delete">削除</div></div>');
//       img.append(btn_wrapper);
//       img.find('img').attr({
//         src: e.target.result
//       })
//     }
//     reader.readAsDataURL(file);
//     images.push(img);

//     if(images.length >= 5) {
//       $('.image-upload-box2').css({
//         'display': 'block'
//       })
//       $('.image-upload-box').css({
//         'display': 'none'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         $('.image_box_multi2').append(image);
//         $('.image-upload-box2').css({
//           'width': `calc(100% - (135px * ${images.length - 5}))`,
//         })
//       })
//       if(images.length == 9) {
//         dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     } else {
//         $('.image_box_multi').empty();
//         $.each(images, function(index, image) {
//           image.attr('data-image', index);
//           $('.image_box_multi').append(image);
//         })
//         dropzone.css({
//           'width': `100%`
//         })
//         $('.image-upload-box').css({
//           'width': `calc(100% - (135px * ${images.length}))`
//         })
//       }
//       if(images.length == 4) {
//         dropzone.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     if(images.length == 10) {
//       $('.image-upload-box2').css({
//         'display': 'none'
//       })
//       return;
//     }
//     var new_image = $(`<input multiple= "multiple" name="product[images_attributes][${images.length}][image]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">`);
//     input_area.prepend(new_image);
//   });
//   $(document).on('click', '.delete', function() {
//     var target_image = $(this).parent().parent();
//     $.each(inputs, function(index, input){
//       if ($(this).data('image') == target_image.data('image')){
//         $(this).remove();
//         target_image.remove();
//         var num = $(this).data('image');
//         images.splice(num, 1);
//         inputs.splice(num, 1);
//         if(inputs.length == 0) {
//           $('input[type= "file"].upload-image').attr({
//             'data-image': 0
//           })
//         }
//       }
//     })
//     $('input[type= "file"].upload-image:first').attr({
//       'data-image': inputs.length
//     })
//     $.each(inputs, function(index, input) {
//       var input = $(this)
//       input.attr({
//         'data-image': index
//       })
//       $('input[type= "file"].upload-image:first').after(input)
//     })
//     if (images.length >= 5) {
//       $('.image-upload-box2').css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         $('.image_box_multi2').append(image);
//         $('.image-upload-box2').css({
//           'width': `calc(100% - (135px * ${images.length -5}))`
//         })
//       })
//       if(images.length == 9) {
//         $('.image-upload-box2').find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//       if(images.length == 8) {
//         $('.image-upload-box2').find('i').replaceWith('<p>ココをクリックしてください</p>')
//       }
//     } else {
//       $('.image-upload-box').css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         $('.image_box_multi').append(image);
//       })
//       $('.image-upload-box').css({
//         'width': `calc(100% - (135px * ${images.length}))`
//       })
//     }
//     if(images.length == 4) {
//       $('.image-upload-box2').css({
//         'display': 'none'
//       })
//     }
//     if(images.length == 3) {
//       $('.image-upload-box').find('i').replaceWith('<p>ココをクリックしてください</p>')
//     }
//   })
// });