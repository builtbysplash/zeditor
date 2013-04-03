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
    "xi":"Ξ",
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
    "domar":"!",
    "ranar":"!",
    "phi":"ϕ",
    "psi":"ψ"
};

var cursor;

function replacer(replacement) {
    var raw = replacement.substring(1);
    cursor -= raw.length;
    console.log(cursor);
    return replacements[raw];
}

function tokensToChar() {
    cursor = document.getElementById('editor').selectionStart;
    var text = $('#editor').val();
    for (var replacement in replacements) {
        text = text.replace(new RegExp(':'+replacement, 'g'), replacer);
    }
    return text;
}

Zepto(function() {
    $('a:not(.zeditor-link)').on('click', function(e) {
        e.preventDefault();
    });

    // Handle input if pasted
    $('#editor').on('paste', function() {     
        $('#editor').val(tokensToChar());
        document.getElementById('editor').setSelectionRange(cursor, cursor);
    });

    // Handle typed input
    $('#editor').on('keyup', function() {
        if ($('#editor').val() == '') {
            $('#btn-save').addClass('disabled');
            $('#btn-save').on('click', null);
        }
        else {
            $('#btn-save').removeClass('disabled');
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
        }
        $('#editor').val(tokensToChar());
        document.getElementById('editor').setSelectionRange(cursor, cursor);
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

    $('#editor').focus();
});

window.onload = function() {
    $('#container').removeClass('hidden');
};
