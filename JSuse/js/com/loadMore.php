
<?php
    // ��� php ���Խӿ��ļ�
    $start = $_GET['start']; //6
    $len = $_GET['len'];  //6
    $items = array();
    for($i = 1; $i < $len; $i++){
        array_push($items, '����' . ($start+$i));
    }
    $ret = array('status'=>1, 'data'=>$items);
    //{status: 1, data: ['����1','����2','����3']}
    sleep(0.5);
    echo json_encode($ret);
?>