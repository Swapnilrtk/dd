
// Let's code our chatbot's logic!
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Let's code the Logic for chatting...
	// and like this you can add several more features to it make it really advance.
	// As i said, i will be uploading it's source code it github so just check the link in description!
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

	// Open websites!
	else if (FormatInput.includes("open git"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Git";
		window.open("https://3in1rajeshswapnilomm.github.io/swapnipoyy/", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("open Swapnil in youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Swapnil channel on YouTube";
		window.open("https://youtube.com/channel/UClHNwSY_mM-G2fi8jSBWB2Q", "_blank");
	}

	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}

// THANKS FOR WATCHING!!!
