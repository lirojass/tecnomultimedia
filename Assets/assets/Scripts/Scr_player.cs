using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_player : MonoBehaviour
{

    //bool activo = false;
    public int puntos = 0;
    public float time = 0;
    public float cooldownTime = 2f;
    public bool shoot;
    void Start()
    {
        Cursor.visible = false;
    }

    void Update()
    {
        Vector3 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        mousePosition.z = Camera.main.transform.position.z + Camera.main.nearClipPlane;
        transform.position = new Vector3(Mathf.Clamp(mousePosition.x, -8f, 8f), Mathf.Clamp(mousePosition.y, -4f, 4f), mousePosition.z);
        if (Input.GetMouseButtonDown(0) && time <= 0)
        {
            shoot = true;
            time = cooldownTime;
        }
        else
        {
            shoot = false;
        }
        time -= Time.deltaTime;

    }

    void OnTriggerEnter2D(Collider2D col)
    {

        if (col.gameObject.tag == "Objetivo")
        {
            col.gameObject.GetComponent<ObjetivoGenerico>().range = true;
        }

    }



    void OnTriggerExit2D(Collider2D col)
    {
        col.gameObject.GetComponent<ObjetivoGenerico>().range = false;
    }


    public void getPuntos(int punto)
    {
        puntos += punto;
        Debug.Log(puntos);
    }



}
