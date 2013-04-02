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
  $('#editor').on('paste', function() {
    var text = $('#editor').val();
    for (var replacement in replacements) {
      text = text.replace(new RegExp(':'+replacement, 'g'), replacements[replacement]);
    }
    $('#editor').val(text);
  });
  $('#editor').on('keyup', function() {
    var text = $('#editor').val();
    for (var replacement in replacements) {
      text = text.replace(new RegExp(':'+replacement, 'g'), replacements[replacement]);
    }
    $('#editor').val(text);
  });
});
