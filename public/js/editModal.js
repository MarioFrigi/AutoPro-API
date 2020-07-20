console.log('Edit dialog');
$(document).ready(function(){
    $('.open-editDialog').click(function(){
        $('#editModal').modal('toggle');
        var id = $(this).data('id');
        $(".modal-body #id").val( id );
        var name = $(this).data('name');
        $(".modal-body #name").val( name );
        var img = $(this).data('image');
        $(".modal-body #img").attr( 'src', img );
        var email = $(this).data('email');
        $(".modal-body #email").val( email );
        var teacher_id = $(this).data('teacher_id');
        $(".modal-body #teacher").val( teacher_id );
        var license = $(this).data('license');
        $(".modal-body #license").val( license );
        var question = $(this).data('question');
        $(".modal-body #question").val( question );
        var answer_a = $(this).data('answer_a');
        $(".modal-body #answer_a").val( answer_a );
        var answer_b = $(this).data('answer_b');
        $(".modal-body #answer_b").val( answer_b );
        var answer_c = $(this).data('answer_c');
        $(".modal-body #answer_c").val( answer_c );
        var correct_answer = $(this).data('correct_answer');
        $(".modal-body #correct_answer").val( correct_answer );
        var unit_id = $(this).data('unit_id');
        $(".modal-body #unit_id").val( unit_id );
    });
});