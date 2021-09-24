setInterval(() => {
    d = new Date();
// console.log(d);
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
   

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    hrotation1 = 30*htime + (mtime-30)/2;
    mrotation1 = 6*(mtime-30);
    srotation1 = 6*stime;

    hour1.style.transform = `rotate(${hrotation1}deg)`;
    minute1.style.transform = `rotate(${mrotation1}deg)`;
    second1.style.transform = `rotate(${srotation1}deg)`;
    
    hrotation2 = 30*htime + (mtime+15)/2;
    mrotation2 = 6*(mtime+15);
    srotation2 = 6*stime;

    hour2.style.transform = `rotate(${hrotation2}deg)`;
    minute2.style.transform = `rotate(${mrotation2}deg)`;
    second2.style.transform = `rotate(${srotation2}deg)`;

    hrotation3 = 30*(htime+3) + (mtime+30)/2;
    mrotation3 = 6*(mtime+30);
    srotation3 = 6*stime;

    hour3.style.transform = `rotate(${hrotation3}deg)`;
    minute3.style.transform = `rotate(${mrotation3}deg)`;
    second3.style.transform = `rotate(${srotation3}deg)`;

    hrotation4 = 30*(htime-1) + mtime/2;
    mrotation4 = 6*mtime;
    srotation4 = 6*stime;

    hour4.style.transform = `rotate(${hrotation4}deg)`;
    minute4.style.transform = `rotate(${mrotation4}deg)`;
    second4.style.transform = `rotate(${srotation4}deg)`;

    hrotation5 = 30*(htime-5) + (mtime-30)/2;
    mrotation5 = 6*(mtime-30);
    srotation5 = 6*stime;

    hour5.style.transform = `rotate(${hrotation5}deg)`;
    minute5.style.transform = `rotate(${mrotation5}deg)`;
    second5.style.transform = `rotate(${srotation5}deg)`;

    hrotation6 = 30*(htime+2) + (mtime+30)/2;
    mrotation6 = 6*(mtime+30);
    srotation6 = 6*stime;

    hour6.style.transform = `rotate(${hrotation6}deg)`;
    minute6.style.transform = `rotate(${mrotation6}deg)`;
    second6.style.transform = `rotate(${srotation6}deg)`;

    hrotation7 = 30*(htime-3) + (mtime-30)/2;
    mrotation7 = 6*(mtime-30);
    srotation7 = 6*stime;

    hour7.style.transform = `rotate(${hrotation7}deg)`;
    minute7.style.transform = `rotate(${mrotation7}deg)`;
    second7.style.transform = `rotate(${srotation7}deg)`;

    hrotation8 = 30*(htime-3) + (mtime-30)/2;
    mrotation8 = 6*(mtime-30);
    srotation8 = 6*stime;

    hour8.style.transform = `rotate(${hrotation8}deg)`;
    minute8.style.transform = `rotate(${mrotation8}deg)`;
    second8.style.transform = `rotate(${srotation8}deg)`;

    hrotation9 = 30*(htime+1) + (mtime+30)/2;
    mrotation9 = 6*(mtime+30);
    srotation9 = 6*stime;

    hour9.style.transform = `rotate(${hrotation9}deg)`;
    minute9.style.transform = `rotate(${mrotation9}deg)`;
    second9.style.transform = `rotate(${srotation9}deg)`;

    hrotation10 = 30*htime + (mtime+30)/2;
    mrotation10 = 6*(mtime+30);
    srotation10 = 6*stime;

    hour10.style.transform = `rotate(${hrotation10}deg)`;
    minute10.style.transform = `rotate(${mrotation10}deg)`;
    second10.style.transform = `rotate(${srotation10}deg)`;

    hrotation11 = 30*htime + (mtime+30)/2;
    mrotation11 = 6*(mtime+30);
    srotation11 = 6*stime;

    hour11.style.transform = `rotate(${hrotation11}deg)`;
    minute11.style.transform = `rotate(${mrotation11}deg)`;
    second11.style.transform = `rotate(${srotation11}deg)`;

    hrotation12 = 30*(htime-3) + (mtime-30)/2;
    mrotation12 = 6*(mtime-30);
    srotation12 = 6*stime;

    hour12.style.transform = `rotate(${hrotation12}deg)`;
    minute12.style.transform = `rotate(${mrotation12}deg)`;
    second12.style.transform = `rotate(${srotation12}deg)`;

    hrotation13 = 30*(htime-3) + (mtime-30)/2;
    mrotation13 = 6*(mtime-30);
    srotation13 = 6*stime;

    hour13.style.transform = `rotate(${hrotation13}deg)`;
    minute13.style.transform = `rotate(${mrotation13}deg)`;
    second13.style.transform = `rotate(${srotation13}deg)`;

    hrotation14 = 30*(htime-4) + (mtime-30)/2;
    mrotation14 = 6*(mtime-30);
    srotation14 = 6*stime;

    hour14.style.transform = `rotate(${hrotation14}deg)`;
    minute14.style.transform = `rotate(${mrotation14}deg)`;
    second14.style.transform = `rotate(${srotation14}deg)`;

    hrotation15 = 30*(htime-8) + (mtime-30)/2;
    mrotation15 = 6*(mtime-30);
    srotation15 = 6*stime;

    hour15.style.transform = `rotate(${hrotation5}deg)`;
    minute15.style.transform = `rotate(${mrotation5}deg)`;
    second15.style.transform = `rotate(${srotation5}deg)`;

    hrotation16 = 30*(htime+6) + (mtime+30)/2;
    mrotation16 = 6*(mtime+30);
    srotation16 = 6*stime;

    hour16.style.transform = `rotate(${hrotation16}deg)`;
    minute16.style.transform = `rotate(${mrotation16}deg)`;
    second16.style.transform = `rotate(${srotation16}deg)`;


    hrotation17 = 30*(htime-9) + (mtime-30)/2;
    mrotation17 = 6*(mtime-30);
    srotation17 = 6*stime;

    hour17.style.transform = `rotate(${hrotation17}deg)`;
    minute17.style.transform = `rotate(${mrotation17}deg)`;
    second17.style.transform = `rotate(${srotation17}deg)`;

    hrotation18 = 30*(htime-4) + (mtime-30)/2;
    mrotation18 = 6*(mtime-30);
    srotation18 = 6*stime;

    hour18.style.transform = `rotate(${hrotation18}deg)`;
    minute18.style.transform = `rotate(${mrotation18}deg)`;
    second18.style.transform = `rotate(${srotation18}deg)`;

    hrotation19 = 30*(htime+4) + (mtime+30)/2;
    mrotation19 = 6*(mtime+30);
    srotation19 = 6*stime;

    hour19.style.transform = `rotate(${hrotation19}deg)`;
    minute19.style.transform = `rotate(${mrotation19}deg)`;
    second19.style.transform = `rotate(${srotation19}deg)`;

    hrotation20 = 30*(htime-9) + (mtime-30)/2;
    mrotation20 = 6*(mtime-30);
    srotation20 = 6*stime;

    hour20.style.transform = `rotate(${hrotation20}deg)`;
    minute20.style.transform = `rotate(${mrotation20}deg)`;
    second20.style.transform = `rotate(${srotation20}deg)`;

    hrotation21 = 30*(htime-2) + (mtime-30)/2;
    mrotation21 = 6*(mtime-30);
    srotation21 = 6*stime;

    hour21.style.transform = `rotate(${hrotation21}deg)`;
    minute21.style.transform = `rotate(${mrotation21}deg)`;
    second21.style.transform = `rotate(${srotation21}deg)`;

    hrotation22 = 30*htime + mtime/2;
    mrotation22 = 6*mtime;
    srotation22 = 6*stime;

    hour22.style.transform = `rotate(${hrotation22}deg)`;
    minute22.style.transform = `rotate(${mrotation22}deg)`;
    second22.style.transform = `rotate(${srotation22}deg)`;
    
    hrotation23 = 30*(htime+2) + (mtime+30)/2;
    mrotation23 = 6*(mtime+30);
    srotation23 = 6*stime;

    hour23.style.transform = `rotate(${hrotation23}deg)`;
    minute23.style.transform = `rotate(${mrotation23}deg)`;
    second23.style.transform = `rotate(${srotation23}deg)`;

    

}, 1000);