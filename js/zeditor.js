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

function handleSaveButton() {
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
        var id = $('#id').val();
        window.location.href = url+"/"+encodeURIComponent(id)+"/fork";
    }
}

Zepto(function() {
    // Prevent default link behaviour
    $('a:not(.zeditor-link)').on('click', function(e) {
        e.preventDefault();
    });

    // Set height to browser height%
    $('#editor').height($(window).height() - 100);

    // Activate Fork button
    if ($('#editor').val() != '') {
        $('#btn-save').on('click', handleSaveButton);
    }

    // Handle input if pasted
    $('#editor').on('paste', function() {     
        $('#editor').val(tokensToChar());
        document.getElementById('editor').setSelectionRange(cursor, cursor);
    });

    // Handle typed input
    $('#editor').on('keyup', function() {
        if ($('#editor').val() == '') {
            $('#btn-save').addClass('disabled');
            $('#btn-save').off('click');
        }
        else {
            $('#btn-save').removeClass('disabled');
            $('#btn-save').on('click', handleSaveButton);
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

    // Populate help macros
    for (var replacement in replacements) {
        $('#help-macros').append('<li>:'+replacement+'→'+replacements[replacement]+'</li>');
    }

    // Populate share input
    $('#share-url').val(window.location.href);
    $('#share-url').on('click', function() {
        document.getElementById('share-url').select();
    });

    // Help button
    $('#btn-help').on('click', function() {
        $('#modal-help').foundation('reveal', 'open');
    });

    // Share button
    $('#btn-share').on('click', function() {
        $('#modal-share').foundation('reveal', 'open');
    });

    $('#editor').focus();
});

window.onload = function() {
    $('#container').removeClass('hidden');
};
