/* TimeElement.js https://github.com/netdexco/TimeElement */

let $=window.$||window.jQuery;

function calculateTimeElements(options)
{
	if(typeof $=="undefined")
	{
		console.error("TimeElements requires jQuery.");
		return false
	}
	if(typeof options=="undefined")options={};
	if(typeof options.year=="undefined")options.year="{y}-{m}-{d}";
	if(typeof options.date=="undefined")options.date="{m}-{d}";
	if(typeof options.time=="undefined")options.time="{h}:{i}";
	if(typeof options.datetime=="undefined")options.datetime="{date} {time}";
	let parseNum=function(num)
	{
		if(num<10)num="0"+num;
		return num
	};
	$("[data-time]").each(function()
	{
		var now=new Date(),
		time=($(this).attr("data-time")*1000),
		date=new Date(time),
		text="",
		notime=$(this).is("[data-notime]"),
		datetime=!notime&&(date.getHours()||$(this).is("[data-datetime]")),
		date=new Date(date.getTime()+(now.getTimezoneOffset()*-1/60*3600));
		if(!notime&&(now.getFullYear()==date.getFullYear()&&now.getDate()==date.getDate()&&now.getMonth()==date.getMonth()))
                {
                        text=options.time;
                        datetime=!1
                }
                else
                {
                        if(datetime)text=options.datetime.split("{date}").join(options.date);
                        else text=options.date
                }
                if(now.getFullYear()!=date.getFullYear())
                {
                        if(datetime)text=options.datetime.split("{date}").join(options.year);
                        else text=options.year
                }
                if(datetime)text=text.split("{time}").join(options.time);
		text=text.split("{h}").join(parseNum(date.getHours()))
			.split("{i}").join(parseNum(date.getMinutes()))
			.split("{d}").join(parseNum(date.getDate()))
			.split("{m}").join(parseNum(date.getMonth()+1))
			.split("{y}").join(parseNum(date.getFullYear()));
		$(this).html(text)
	});
	return true
}
