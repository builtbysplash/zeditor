$(document).foundation();

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

Zepto(function() {
	// Handle input if pasted
	$('#editor').on('paste', function() {
		var text = $('#editor').val();
		for (var replacement in replacements) {
			text = text.replace(new RegExp(':'+replacement, 'g'), replacements[replacement]);
		}
		$('#editor').val(text);
	});

	// Handle typed input
	$('#editor').on('keyup', function() {
		var text = $('#editor').val();
		for (var replacement in replacements) {
			text = text.replace(new RegExp(':'+replacement, 'g'), replacements[replacement]);
		}
		$('#editor').val(text);
	});

	// Full screen button
	$('#btn-full').on('click', function() {
		if ($('.row').hasClass('full')) {
			$('.row').removeClass('full');
			$('#btn-full').text('Maximize');
		}
		else {
			$('.row').addClass('full');
			$('#btn-full').text('Minimize');
		}
	});

	// Save file
	$('#btn-save').on('click', function() {
		$('#modal-sign').foundation('reveal', 'open');
	});
});
