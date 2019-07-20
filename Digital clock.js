function t()
            {
                var time=new Date()
                var h=time.getHours()
                var m= time.getMinutes() 
                var s= time.getSeconds()
                if (h<10)
                {
                    h="0"+h
                }
                if (m<10)
                {
                    m="0"+m
                }
                if (s<10)
                {
                    s="0"+s
                }
                if(h>12)
                {
                    document.getElementById("box").innerText=(h-12)+":"+m+":"+s+" PM"
                }
                else
                {
                    document.getElementById("box").innerText=h+":"+m+":"+s+" AM"
                }
                
                setTimeout(t,1000)
            }
            t()