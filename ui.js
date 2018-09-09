
var ui_id = 0;
function fn_get_ui_id(){
    ui_id++;
    return ui_id;
}

function ui_br(id){
    let target = document.getElementById(id);
    target.appendChild(document.createElement("br"));
}

class ui_materialize_container {
    constructor(){
        let id = fn_get_ui_id();
        this.id = "container_" + id;
        let d = document.createElement("div");
        d.id = this.id;
        d.className = "container";
        this.html = d;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}

class ui_materialize_row {
    constructor(){
        let id = fn_get_ui_id();
        this.id = "row_" + id;
        let d = document.createElement("div");
        d.id = this.id;
        d.className = "row";
        this.html = d;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}

class ui_materialize_col {
    constructor(size){
        let id = fn_get_ui_id();
        this.id = "col_" + id;
        let d = document.createElement("div");
        d.id = this.id;
        d.className = "col s" + size;
        this.html = d;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}


class ui_materialize_table {
    constructor(header_array,data_array){
        this.columnCount = -1;
        
        let id = fn_get_ui_id();
        this.id = "table_" + id;
        let t = document.createElement("table");
        t.id = this.id;
        t.className = "highlight";

        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        for(let i = 0; i < header_array.length; i++){
            let th = document.createElement("th");
            th.textContent = header_array[i];
            tr.appendChild(th);
            this.columnCount++;
        }
        thead.appendChild(tr);
        t.appendChild(thead);

        let tbody = document.createElement("tbody");
        for(let i = 0; i < data_array.length; i++){
            let tr = document.createElement("tr");
            for(let j = 0; j <= this.columnCount; j++){
                let td = document.createElement("td");
                td.textContent = data_array[i][j];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        t.appendChild(tbody);
        
        this.html = t;
    }

    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}

class ui_materialize_select {
    constructor(label,size,option_array){
        let id = fn_get_ui_id();
        this.id = "select_" + id;
        let div = document.createElement("div");
        div.className = "input-field col s" + size;
        let select = document.createElement("select");
        select.id = this.id;
        for(let i = 0; i < option_array.length; i++){
            let option = document.createElement("option");
            option.value = option_array[i][0];
            option.textContent = option_array[i][1];
            select.appendChild(option);
        }
        div.appendChild(select);
        let l = document.createElement("label");
        l.textContent = label;
        div.appendChild(l);
        this.html = div;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
        // Switch On
        let el = document.getElementById(this.id);
        M.FormSelect.init(el);
    }
}

class ui_materialize_text {
    constructor(label,size){
        let id = fn_get_ui_id();
        this.id = "text_" + id;
        let div = document.createElement("div");
        div.className = "input-field col s" + size;
        let input = document.createElement("input");
        input.id = this.id;
        input.type = "text";
        div.appendChild(input);
        let l = document.createElement("label");
        l.textContent = label;
        div.appendChild(l);
        this.html = div;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
    readvalue(){
        let value = document.getElementById(this.id).value;
        return value;
    }
}

class ui_materialize_button {
    constructor(text,action){
        let id = fn_get_ui_id();
        this.id = "button_" + id;
        let a = document.createElement("a");
        a.id = this.id;
        a.className = "waves-effect waves-light btn";
        a.textContent = text;
        a.addEventListener("click", function(){ button(action); });
        this.html = a;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}

class ui_heading {
    constructor(text){
        let t = document.createElement("h3");
        t.textContent = text;
        this.html = t;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}

class ui_text{
    constructor(text){
        let t = document.createElement("p");
        t.textContent = text;
        this.html = t;
    }
    draw(id){
        let target = document.getElementById(id);
        target.appendChild(this.html);
    }
}