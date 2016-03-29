#pragma strict

public class Barf {
	public var foo : int;
}

function Start () {
	
	var 


	var json : String = "{ \"foo\": 123 }";
	var obj = JsonUtility.FromJson.<Barf>(json);
	Debug.Log(obj.foo + 123 );
}

function Update () {

}
