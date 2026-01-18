
function incrementValue(e) {
    e.preventDefault();
    var fieldName = Rs.(e.target).data('field');
    var parent = Rs.(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = Rs.(e.target).data('field');
    var parent = Rs.(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
  }


  Rs.('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  Rs.('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });
  