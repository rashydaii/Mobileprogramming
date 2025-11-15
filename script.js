$(function () {

    const $btn = $("#startAnim");
    const $div = $(".kando");
  
    function px(n){ return (typeof n === "number") ? n + "px" : n; }
  
    $btn.on("click", function () {
      
      $btn.prop("disabled", true);
  
      
      const original = {
        left: parseInt($div.css("left"), 10) || 0,
        top: parseInt($div.css("top"), 10) || 0,
        width: $div.width(),
        height: $div.height(),
        fontSize: parseInt($div.css("font-size"), 10) || 16,
        bg: $div.css("background-color"),
        color: $div.css("color"),
        fontWeight: $div.css("font-weight"),
        transform: $div.css("transform")
      };
  

      const steps = [
        {
          animate: { left: original.left + 160, width: 200, height: 150, top: original.top },
          css: { "background-color": "#FF5733", color: "#ffffff", "font-size": "24px", "font-style": "normal", transform: "rotate(6deg)" },
          duration: 700
        },
        {
          animate: { top: original.top + 110, width: 260, height: 200 },
          css: { "background-color": "#33FF57", color: "#222222", "font-style": "italic", "font-weight": "700", transform: "rotate(-8deg)", "text-transform": "none" },
          duration: 700
        },
        {
          animate: { left: original.left - 20, width: 180, height: 180, top: original.top + 80 },
          css: { "background-color": "#33A1FF", color: "#ffffff", "font-weight": "900", "text-transform": "uppercase", transform: "rotate(12deg)" },
          duration: 700
        },
        {
          animate: { top: original.top - 8, left: original.left + 60, width: 220, height: 120 },
          css: { "background-color": "#FF33A6", color: "#000000", "font-size": "28px", transform: "rotate(18deg)", "font-style": "normal" },
          duration: 700
        },
        
        {
          animate: { left: original.left, top: original.top, width: original.width, height: original.height },
          css: { "background-color": original.bg, color: original.color, "font-size": original.fontSize + "px", "font-weight": original.fontWeight, transform: "none", "font-style": "normal", "text-transform": "none" },
          duration: 800
        }
      ];
  
      
      let i = 0;
      function runNext() {
        if (i >= steps.length) {
          
          $btn.prop("disabled", false);
          return;
        }
        const step = steps[i];
        
        $div.animate(step.animate, step.duration, function () {
          
          $div.css(step.css);
       
          setTimeout(function () {
            i++;
            runNext();
          }, 120);
        });
      }
  
      runNext();
  
    });
  
  });
  