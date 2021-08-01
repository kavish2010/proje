var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png",
"https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"
];
var names=["ffamily book","BK Gupta","Kanav Gupta","Kiaan Gupta","Usha Gupta","Isha Gupta"];

var i=0
function update()
{
    i++;
    var number_of_family_member_in_array=5
    if(i>number_of_family_member_in_array)
    {
        i=0;
    }
    var updatedImg = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("ffamily_member_name").innerHTML=updatedName;
}