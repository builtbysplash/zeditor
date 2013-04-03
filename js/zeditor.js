$(document).foundation();

var url = 'http://localhost/zeditor';

var replacements = {
    "int":"ℤ",
    "nat":"ℕ",
    "uexists":"∃₁",
    "all":"∀",
    "exists":"∃",
    "notexists":"∄",
    "emptyset":"∅",
    "element":"∈",
    "notelement":"∉",
    "bullet":"∙",
    "and":"∧",
    "or":"∨",
    "cap":"∩",
    "cup":"∪",
    "subset":"⊂",
    "eqsubset":"⊆",
    "neg":"¬",
    "neq":"≠",
    "powerset":"ℙ",
    "Delta":"Δ",
    "Xi":"Ξ",
    "leq":"≤",
    "geq":"≥",
    "imp":"⇒",
    "defeq":"≙",
    "tuple":"↦",
    "times":"×",
    "bar":"|",
    "rel":"↔",
    "iff":"⇔",
    "inv":"⁻¹",
    "domr":"◁",
    "ranr":"▷",
    "domar":"domar!",
    "ranar":"ranar!",
    "phi":"ϕ",
    "psi":"ψ"
};

function tokensToChar() {
    var text = $('#editor').val();
    for (var replacement in replacements) {
        text = text.replace(new RegExp(':'+replacement, 'g'), replacements[replacement]);
    }
    return text;
}

Zepto(function() {
    $('a:not(.zeditor-link)').on('click', function(e) {
        e.preventDefault();
    });
    $('#editor').val(tokensToChar());
    // Handle input if pasted
    $('#editor').on('paste', function() {       
        $('#editor').val(tokensToChar());
    });

    // Handle typed input
    $('#editor').on('keyup', function() {
        $('#editor').val(tokensToChar());
    });

    // Full screen button
    $('#btn-full').on('click', function() {
        if ($('#editor').hasClass('full')) {
            $('.row, #editor').removeClass('full');
            $('#btn-full').text('Maximize');
        }
        else {
            $('.row, #editor').addClass('full');
            $('#btn-full').text('Minimize');
        }
    });

    // Save file
    $('#btn-save').on('click', function() {
        var text = $('#editor').val();        
        if ($('#id').val() == '') {
            $('#btn-save').text('Saving...');
            $.post(url+'/create', {content: text}, function(response) {
                var id = response.replace(/["']{1}/g, "");
                window.location.href = url+"/"+encodeURIComponent(id);
            });
        }
        else {
            $('#btn-save').text('Forking...');
            $.post(url+'/fork/'+$('#id').val(), {}, function(response) {
                var id = response.replace(/["']{1}/g, "");
                window.location.href = url+"/"+encodeURIComponent(id)+"/fork";
            });
        }
    });
});
