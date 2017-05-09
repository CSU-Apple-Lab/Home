function submitted(data) {
    if(data.code===0) {
        window.location.href="/success-hr.html";
    } else {
        alert(data.message);
    }
}

$("form").submit(function(ev) {
    switch(window.location.pathname) {
    case "/hr-coder":
        $.post("/api/submit-coder",
        {
            name: $("#form_name").val(),
            class: $("#form_class").val(),
            id: $("#form_id").val(),
            email: $("#form_email").val(),
            grade: $("#form_grade").val(),
            gender: $("#form_gender").val(),
            qq: $("#form_qq").val(),
            part: $("#form_part").val(),
            phone: $("#form_phone").val(),
            softwareExp: $("#form_softwareExp").val(),
            mobileExp: $("#form_mobileExp").val()==="是",
            webExp: $("#form_webExp").val()==="是",
            otherExp: $("#form_otherExp").val()==="是",
            skill: $("#form_skill").val(),
            introduce: $("#form_introduce").val()
        },
        submitted);
        break;
    case "/hr-designer":
        $.post("/api/submit-designer",
        {
            name: $("#form_name").val(),
            class: $("#form_class").val(),
            id: $("#form_id").val(),
            email: $("#form_email").val(),
            grade: $("#form_grade").val(),
            gender: $("#form_gender").val(),
            qq: $("#form_qq").val(),
            phone: $("#form_phone").val(),
            designExp: $("#form_designExp").val(),
            uiExp: $("#form_uiExp").val()==="是",
            zcoolExp: $("#form_zcoolExp").val()==="是",
            mdExp: $("#form_mdExp").val()==="是",
            skill: $("#form_skill").val(),
            introduce: $("#form_introduce").val()
        },
        submitted);
        break;
    case "/hr-pmer":
        $.post("/api/submit-pmer",
        {
            name: $("#form_name").val(),
            class: $("#form_class").val(),
            id: $("#form_id").val(),
            email: $("#form_email").val(),
            grade: $("#form_grade").val(),
            gender: $("#form_gender").val(),
            qq: $("#form_qq").val(),
            phone: $("#form_phone").val(),
            skill: $("#form_skill").val(),
            introduce: $("#form_introduce").val()
        },
        submitted);
        break;
    }

    ev.preventDefault();
});
