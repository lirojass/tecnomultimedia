using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjetivoGenerico : MonoBehaviour
{

    public bool range = false;
    public int punto=0;
    
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log(GameObject.FindGameObjectWithTag("Puntero").GetComponent<Scr_player>().shoot);
        if (this.range && GameObject.FindGameObjectWithTag("Puntero").GetComponent<Scr_player>().shoot)
        {
            //transform.position = new Vector2(Random.Range(-8f, 8f), Random.Range(-4, 4));
            GameObject.FindGameObjectWithTag("Puntero").GetComponent<Scr_player>().getPuntos(punto);
        }
    }

     
}
