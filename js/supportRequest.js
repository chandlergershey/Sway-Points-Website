function supportRequest() {
    emailInput = document.getElementById("emailFeedback").value;
    messageInput = document.getElementById("messageFeedback").value;
    feedbackString = emailInput + ": " + messageInput;

    $.post("https://swaypoints.herokuapp.com/support/feedback",
        {
            message: feedbackString
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
    });
    alert("Thank you for your feedback!")
    document.getElementById("emailFeedback").value = ""
    document.getElementById("messageFeedback").value = ""
}
document.getElementById("feedbackSubmit").addEventListener("click", supportRequest);