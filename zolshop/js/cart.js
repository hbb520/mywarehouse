$(document).ready(function() {
		//购物车状态

		var lentr = parseInt($('body').find("tr").length - 3)
		$('#gouwuchezhuangtai').html('( ' + lentr + '/30 )')

		//减号
		$('body').on('click', '.minus', function() {
			var valText = $(this).siblings('input').val()
			var em1 = $(this).parent().parent().prev().children('em').html()
			valText--;
			if(valText <= 1) {
				valText = 1
			}
			var em2 = em1 * valText;
			$(this).parent().parent().next().next().children('em').html(em2)
			$(this).siblings('.tips-2').hide();
			$(this).siblings('input').val(valText);

			//结算
			var totalAll = 0;
			$('.s-total>em').each(function(index) {
				totalAll += parseInt($('.s-total em').eq(index).html())
			})
			$('.total-cart-price').html(totalAll)

		})
		//减
		$('body').on('click', '.plus', function() {
			var valText = $(this).siblings('input').val()
			var em3 = $(this).parent().parent().prev().children('em').html()
			valText++;
			if(valText >= 10) {
				valText = 10;
				$(this).siblings('.tips-2').show().html('最多只能买' + valText + '件')
			}
			var em4 = em3 * valText

			$(this).siblings('input').val(valText);
			$(this).parent().parent().next().next().children('em').html(em4)

			//结算
			var totalAll = 0;
			$('.s-total>em').each(function(index) {
				totalAll += parseInt($('.s-total>em').eq(index).html())
			})
			$('.total-cart-price').html(totalAll)

		})

		//全选判定
		$("input[name=checkAllCart]").click(function() {
			var cartIdArr = new Array();
			if($(this).is(":checked")) {
				$("input[type=checkbox]").each(function() {
					if(!$(this).is(":checked")) {
						$(this).get(0).checked = true;
					}
					if('item' == $(this).attr("item")) {
						cartId = parseInt($(this).val());
						if(cartId) {
							cartIdArr.push(cartId);
						}
					}
				});
				$.getCartInfo();
			} else {
				$("input[type=checkbox]").each(function() {
					if($(this).is(":checked")) {
						$(this).get(0).checked = false;
					}
				});
				$(".total-cart-price").html("0");
				$("input[name=submitCart]").attr("disabled", "true");
			}
			$.changeBackColor();
		});

		//删除
		$('body').on('click', '.s-delbox>a', function() {
			$(this).parents('tr').remove()

		})

	})
	//end