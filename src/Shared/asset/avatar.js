export const Avatar = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
      width="24"
      height="24"
    >
      <path
        d="M0 0 C0.91297852 0.16628906 1.82595703 0.33257812 2.76660156 0.50390625 C44.3986228 8.16363077 83.16052206 26.40624883 116 53 C116.54446777 53.44005371 117.08893555 53.88010742 117.64990234 54.33349609 C131.72173929 65.81174863 144.93680647 78.57719064 156 93 C156.75925781 93.93070312 157.51851563 94.86140625 158.30078125 95.8203125 C184.16428672 128.07750752 200.61565092 167.52203223 208 208 C208.16371094 208.83031738 208.32742188 209.66063477 208.49609375 210.51611328 C213.83722449 238.27564713 213.77784959 271.32605731 208 299 C207.69400879 300.48838379 207.69400879 300.48838379 207.38183594 302.00683594 C204.28094307 316.67175722 200.16589373 330.93309724 195 345 C194.60458008 346.08837158 194.60458008 346.08837158 194.20117188 347.19873047 C182.70330026 378.32799317 163.02259331 407.2593531 140 431 C139.43700195 431.5887793 138.87400391 432.17755859 138.29394531 432.78417969 C130.28314335 441.13934713 122.06167431 448.79494882 112.75927734 455.68945312 C110.97587587 457.01797091 109.21590484 458.37360037 107.45703125 459.734375 C93.12563519 470.69140158 77.29762776 479.33386848 61 487 C59.92363281 487.50917969 58.84726562 488.01835937 57.73828125 488.54296875 C41.80084065 495.71385578 25.15404412 500.82119105 8.0625 504.375 C6.91579834 504.61347656 5.76909668 504.85195313 4.58764648 505.09765625 C-11.87056625 508.34264043 -27.88483441 509.37788987 -44.625 509.3125 C-45.59455627 509.31067719 -46.56411255 509.30885437 -47.56304932 509.30697632 C-61.89479259 509.26162737 -75.90895512 508.84295422 -90 506 C-90.90186035 505.82307617 -91.8037207 505.64615234 -92.73291016 505.46386719 C-132.12397666 497.55971626 -169.12892028 481.58571228 -201 457 C-202.35351562 455.96746094 -202.35351562 455.96746094 -203.734375 454.9140625 C-210.48772222 449.64473107 -216.80272885 443.90525314 -223 438 C-223.60038086 437.42830078 -224.20076172 436.85660156 -224.81933594 436.26757812 C-233.71075533 427.73879277 -241.69856614 418.92057983 -249 409 C-249.41556152 408.44521973 -249.83112305 407.89043945 -250.25927734 407.31884766 C-257.509338 397.62666131 -263.90062184 387.44897354 -270 377 C-270.36867188 376.37013184 -270.73734375 375.74026367 -271.1171875 375.09130859 C-284.64970017 351.67014122 -292.83692378 325.43137653 -298 299 C-298.16661133 298.17806152 -298.33322266 297.35612305 -298.50488281 296.50927734 C-303.91399393 268.58460119 -303.4943756 235.86665104 -298 208 C-297.83371094 207.08847168 -297.66742188 206.17694336 -297.49609375 205.23779297 C-289.83732135 163.60385521 -271.59487824 124.84086971 -245 92 C-244.55994629 91.45553223 -244.11989258 90.91106445 -243.66650391 90.35009766 C-232.18825137 76.27826071 -219.42280936 63.06319353 -205 52 C-204.06929688 51.24074219 -203.13859375 50.48148438 -202.1796875 49.69921875 C-169.92831086 23.8403784 -130.47485354 7.37205239 -90 0 C-89.16436523 -0.16371094 -88.32873047 -0.32742188 -87.46777344 -0.49609375 C-59.75836479 -5.78656862 -27.64906696 -5.41678597 0 0 Z M-193 66 C-193.87615967 66.70261963 -193.87615967 66.70261963 -194.77001953 67.41943359 C-208.76688373 78.75961335 -222.18317752 91.57123329 -233 106 C-233.47324707 106.61858887 -233.94649414 107.23717773 -234.43408203 107.87451172 C-266.32782919 149.70839407 -283.5407058 200.09512814 -283.3125 252.6875 C-283.31067719 253.56396179 -283.30885437 254.44042358 -283.30697632 255.34344482 C-283.26005448 268.77287209 -282.67080753 281.80368719 -280 295 C-279.83371094 295.87076172 -279.66742188 296.74152344 -279.49609375 297.63867188 C-273.06866572 330.79943943 -260.18765019 362.79346482 -240 390 C-236.53899596 387.27252219 -235.44904092 383.4793261 -233.9375 379.5 C-225.2958788 357.85528327 -213.17247716 337.86136564 -197 321 C-195.91163245 319.71257235 -194.82820789 318.42094816 -193.75 317.125 C-173.89992498 294.50409071 -147.56688634 280.20771088 -121 267 C-122.175625 265.6696875 -122.175625 265.6696875 -123.375 264.3125 C-136.40431346 248.98389594 -146.30220878 233.42946808 -152 214 C-152.3403125 212.87078125 -152.680625 211.7415625 -153.03125 210.578125 C-157.28304234 193.49221875 -156.95004359 172.88246575 -152 156 C-151.68289062 154.82566406 -151.36578125 153.65132812 -151.0390625 152.44140625 C-146.49975953 137.22991225 -138.93244201 122.57031545 -128 111 C-127.30753174 110.2562915 -127.30753174 110.2562915 -126.60107422 109.49755859 C-120.29427361 102.76628179 -113.88954766 96.86310332 -106 92 C-104.96488281 91.34386719 -103.92976562 90.68773438 -102.86328125 90.01171875 C-77.62920476 74.49740759 -47.9157162 71.13901758 -19.17578125 76.74609375 C1.13801353 81.60327104 17.98772577 91.60678862 33 106 C33.70898438 106.65742187 34.41796875 107.31484375 35.1484375 107.9921875 C53.3512805 125.35811817 64.47477768 152.17797201 65.23828125 177.17578125 C65.45294836 190.96475882 65.20879703 203.80346746 61 217 C60.67854004 218.02673828 60.67854004 218.02673828 60.35058594 219.07421875 C55.08451127 235.41668044 46.33817026 248.39556528 35.33740234 261.39550781 C33.82145653 263.21420002 32.38761041 265.08168947 31 267 C31.94617188 267.46148437 32.89234375 267.92296875 33.8671875 268.3984375 C86.62889279 294.32666092 127.41577431 333.02094722 148 389 C148.99 389 149.98 389 151 389 C152.7148956 386.65458328 154.21032212 384.36524531 155.6875 381.875 C156.12956787 381.14434326 156.57163574 380.41368652 157.02709961 379.66088867 C157.93263672 378.15753074 158.83277408 376.65090736 159.72753906 375.14111328 C160.84020709 373.2688764 161.97377126 371.41211432 163.1171875 369.55859375 C176.75544711 346.800775 184.9826729 320.92521226 190 295 C190.16516113 294.1867627 190.33032227 293.37352539 190.50048828 292.53564453 C201.94574172 234.19680874 186.69678969 170.00832825 154 121 C150.21347675 115.49657542 146.18762223 110.2030549 142 105 C141.53158691 104.41589355 141.06317383 103.83178711 140.58056641 103.22998047 C129.24038665 89.23311627 116.42876671 75.81682248 102 65 C101.38141113 64.52675293 100.76282227 64.05350586 100.12548828 63.56591797 C58.31892832 31.69300114 7.93862472 14.45338032 -44.625 14.6875 C-45.50084747 14.68965515 -46.37669495 14.6918103 -47.27908325 14.69403076 C-100.3039948 14.90278313 -151.57990706 32.66348808 -193 66 Z M-107 115 C-107.91265625 115.82113281 -108.8253125 116.64226562 -109.765625 117.48828125 C-126.57576997 133.33583412 -137.4412855 155.06082244 -138.23828125 178.3359375 C-138.74605112 205.84203637 -131.47975712 229.12692246 -112.41235352 249.63061523 C-94.53709477 268.08945665 -70.526937 277.53389781 -45 278.25 C-22.87632929 277.62936897 -1.7269592 270.76396068 15 256 C15.83144531 255.31164062 16.66289062 254.62328125 17.51953125 253.9140625 C34.26757912 239.66149949 44.78223944 218.66242375 48 197 C48.28711341 193.07859965 48.33453403 189.18087171 48.3125 185.25 C48.30404053 183.66348633 48.30404053 183.66348633 48.29541016 182.04492188 C48.17045486 173.97355235 47.43281602 166.74077825 45 159 C44.80664062 158.37222656 44.61328125 157.74445313 44.4140625 157.09765625 C39.69700235 142.1602991 31.93594307 130.23915776 21 119 C20.41605469 118.36578125 19.83210937 117.7315625 19.23046875 117.078125 C3.473163 100.39826036 -20.42929466 91.67822682 -43.0390625 90.93359375 C-66.67256323 91.32981615 -89.48226188 98.72973717 -107 115 Z M-179.3125 327.0625 C-198.69519792 346.95110847 -212.91401869 371.09800827 -222.5 397.0625 C-222.76772217 397.7649585 -223.03544434 398.46741699 -223.3112793 399.19116211 C-224.8739216 403.60036746 -225.217301 406.4983507 -224 411 C-222.15693141 413.55901136 -222.15693141 413.55901136 -219.6953125 415.86328125 C-218.35339844 417.19456055 -218.35339844 417.19456055 -216.984375 418.55273438 C-216.04078125 419.46345703 -215.0971875 420.37417969 -214.125 421.3125 C-213.22007812 422.21162109 -212.31515625 423.11074219 -211.3828125 424.03710938 C-167.16801777 467.46684028 -107.18316287 491.58779508 -45.375 491.3125 C-44.49915253 491.31034485 -43.62330505 491.3081897 -42.72091675 491.30596924 C9.62656235 491.09988384 62.50698603 473.84250571 103 440 C103.53286621 439.56574707 104.06573242 439.13149414 104.61474609 438.68408203 C112.18027468 432.51851742 119.32371474 425.93546997 126.3125 419.125 C127.06047852 418.41142334 127.80845703 417.69784668 128.57910156 416.96264648 C131.45813615 414.1067434 133.66081939 411.86170209 135.15625 408.0625 C134.93289973 403.68483463 133.6937104 399.9711088 132.1875 395.875 C131.87490234 395.00625244 131.56230469 394.13750488 131.24023438 393.24243164 C113.214615 344.77460932 76.22174746 307.91403696 30 286 C27.02784018 284.65043662 24.03749443 283.38236915 21 282.1875 C20.36006104 281.92678711 19.72012207 281.66607422 19.06079102 281.39746094 C16.31826362 280.38727018 14.47439519 279.87654855 11.61328125 280.62109375 C10.75089844 281.07613281 9.88851562 281.53117187 9 282 C7.6433719 282.61063882 6.28217113 283.21116292 4.91796875 283.8046875 C4.15838867 284.13911865 3.39880859 284.4735498 2.61621094 284.81811523 C-26.56952419 297.51866282 -57.82980209 298.85366351 -87.66650391 287.29589844 C-92.1090061 285.48390091 -96.31115147 283.39199582 -100.3984375 280.8828125 C-118.84013621 270.71738833 -166.70457275 314.78431854 -179.3125 327.0625 Z "
        fill={fill}
        transform="translate(301,3)"
      />
    </svg>
  );
};
