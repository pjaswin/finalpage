var i =0;
var word="";
const wordss=['Adult',
'Agent',
'Anger',
'Apple',
'Award',
'Basis',
'Beach',
'Birth',
'Block',
'Blood',
'Board',
'Brain',
'Bread',
'Break',
'Brown',
'Buyer',
'Cause',
'Chain',
'Chair',
'Chest',
'Chief',
'Child',
'China',
'Claim',
'Class',
'Clock',
'Coach',
'Coast',
'Court',
'Cover',
'Cream',
'Crime',
'Cross',
'Crowd',
'Crown',
'Cycle',
'Dance',
'Death',
'Depth',
'Doubt',
'Draft',
'Drama',
'Dream',
'Dress',
'Drink',
'Drive',
'Earth',
'Enemy',
'Entry',
'Error',
'Event',
'Faith',
'Fault',
'Field',
'Fight',
'Final',
'Floor',
'Focus',
'Force',
'Frame',
'Frank',
'Front',
'Fruit',
'Glass',
'Grant',
'Grass',
'Green',
'Group',
'Guide',
'Heart',
'Henry',
'Horse',
'Hotel',
'House',
'Image',
'Index',
'Input',
'Issue',
'Japan',
'Jones',
'Judge',
'Knife',
'Laura',
'Layer',
'Level',
'Lewis',
'Light',
'Limit',
'Lunch',
'Major',
'March',
'Match',
'Metal',
'Model',
'Money',
'Month',
'Motor',
'Mouth',
'Music',
'Night',
'Noise',
'North',
'Novel',
'Nurse',
'Offer',
'Order',
'Other',
'Owner',
'Panel',
'Paper',
'Party',
'Peace',
'Peter',
'Phase',
'Phone',
'Piece',
'Pilot',
'Pitch',
'Place',
'Plane',
'Plant',
'Plate',
'Point',
'Pound',
'Power',
'Press',
'Price',
'Pride',
'Prize',
'Proof',
'Queen',
'Radio',
'Range',
'Ratio',
'Reply',
'Right',
'River',
'Round',
'Route',
'Rugby',
'Scale',
'Scene',
'Scope',
'Score',
'Sense',
'Shape',
'Share',
'Sheep',
'Sheet',
'Shift',
'Shirt',
'Shock',
'Sight',
'Simon',
'Skill',
'Sleep',
'Smile',
'Smith',
'Smoke',
'Sound',
'South',
'Space',
'Speed',
'Spite',
'Sport',
'Squad',
'Staff',
'Stage',
'Start',
'State',
'Steam',
'Steel',
'Stock',
'Stone',
'Store',
'Study',
'Stuff',
'Style',
'Sugar',
'Table',
'Taste',
'Terry',
'Theme',
'Thing',
'Title',
'Total',
'Touch',
'Tower',
'Track',
'Trade',
'Train',
'Trend',
'Trial',
'Trust',
'Truth',
'Uncle',
'Union',
'Unity',
'Value',
'Video',
'Visit',
'Voice',
'Waste',
'Watch',
'Water',
'While',
'White',
'Whole',
'Woman',
'World',
'Youth',
]
var wordly=wordss[Math.floor(Math.random()*wordss.length)].toUpperCase();
console.log(wordly)
var chance=0
var count=0
var back=0
$('html').keyup(function(e)
{
    var keynum;
        
    // if(window.event)
    //         {                    
    //             keynum = e.keyCode;
    //             console.log(keynum)
    //         }
        //  if(e.which)
        //     {     
        //         console.log("hello")            
        //         keynum = e.which;
        //         console.log(keynum)
        //     }

        keynum=e.keyCode
            if(keynum < 91 && keynum > 64 && count<5)
            {
            keypressitem = String.fromCharCode(keynum).toUpperCase()
            console.log(keypressitem)
            word=word.concat(keypressitem)
            $('td').eq(i).text(keypressitem)
            i++
            count++
            
            }
            else if((i)%5==0 && keynum==13)
            {
                console.log(word)
                chance++
                validator(word)
                word=""
                count=0
                back=i
            }
             if(e.keyCode==8 && i>back)
            {
                word=word.slice(0,-1)
                i=i-1
                $('td').eq(i).text(null)
                
                count=count-1
            }
            
        });
function validator(a)
{
    for(j=0;j<5;j++)
    {
        if(a[j]==wordly[j])
        {
            t=5-j
            $('td').eq(i-t).addClass('greenBg');
        }
        for (k=0;k<5;k++)
        {
            if(a[k]==wordly[j] && j!=k )
            {
                t=5-k
                $('td').eq(i-t).addClass('yellowBg');
            }
        }
    }

    if (a==wordly)
    {
        $('h2').text("Ya That is the Correct Word. You got it in "+chance+"/6 attempt")
        count=100
        i=97
    }
    
    
}
// function reset()
// {

//     for(i=0;i<30;i++)
//     {
//         $('td').eq(i).text(null);
//         $('td').eq(i-t).addClass('whiteBg');
//     }
//     i=0;
//     chance=0;
// }