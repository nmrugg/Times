document.addEventListener("DOMContentLoaded", function ()
{
    "use strict";
    
    var container = document.body;
    
    function make_button(x, y)
    {
        var button = document.createElement("button"),
            showing_answer;
        
        button.textContent = x + " \u00D7 " + y;
        
        button.onclick = function ()
        {
            if (showing_answer) {
                button.textContent = x + " \u00D7 " + y;
                showing_answer = false;
                button.classList.remove("showing_answer");
            } else {
                button.textContent = x * y;
                showing_answer = true;
                button.classList.add("showing_answer");
            }
        }
        
        return button;
    }
    
    function make_table(x, y)
    {
        var x_inc = 1,
            y_inc = 1,
            x_pos,
            y_pos;
        
        /// Clear the table.
        container.innerHTML = "";
        
        for (x_pos = 0; x_pos <= x; x_pos += x_inc) {
            for (y_pos = 0; y_pos <= y; y_pos += y_inc) {
                container.appendChild(make_button(x_pos, y_pos));
            }
            /// Make a new line.
            container.appendChild(document.createElement("br"));
        }
    }
    
    make_table(12, 12);
});
