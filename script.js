$(document).ready(function() {
	$("#button").click(function() {
		$.ajax({
			url : "data.json",
			dataType : "json",
			success: function(result) {
				console.log(result);
				$("#name").html(result.Name);
				$("#age").html(result.Age);
				$("#contact").html(result.Contact);
				$("#blood").html(result.BloodGroup);
				$("#addr").html(result.Address);
				$("#sex").html(result.Sex);
			}
		});
	});
});